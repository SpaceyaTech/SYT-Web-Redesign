import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useRef, useState } from "react";
import privateAxios from "../../../api/privateAxios";

const useCheckPaymentStatus = (enrollmentId, options = {}) => {
  const {
    enabled = false,
    pollingInterval = 5000,
    maxAttempts = 3,
    isOpen = true,
  } = options;

  const [status, setStatus] = useState({
    isSuccess: false,
    isError: false,
    isPending: true,
    message: "",
    errorCode: null,
  });

  const attemptsRef = useRef(0);

  const { data, isError, isSuccess, refetch, isLoading } = useQuery({
    queryKey: ["paymentStatus", enrollmentId],
    queryFn: async () => {
      if (!enrollmentId) return null;
      try {
        const response = await privateAxios.get(`/callback/${enrollmentId}/`);
        return response.data;
      } catch (error) {
        if (error.response?.status === 400) {
          setStatus({
            isSuccess: false,
            isError: true,
            isPending: false,
            message: error.response.data?.message || "Payment failed",
            errorCode: error.response.status,
          });

          return {
            error: true,
            message: error.response.data?.message || "Payment failed",
            errorCode: error.response.status,
          };
        }
        throw error;
      }
    },
    enabled:
      Boolean(enrollmentId) &&
      enabled &&
      attemptsRef.current < maxAttempts &&
      isOpen,
    refetchInterval: status.isPending ? pollingInterval : false,
    refetchOnWindowFocus: false,
    retry: (failureCount, error) => {
      if (error.response?.status === 400) {
        return false;
      }
      if (attemptsRef.current >= maxAttempts) {
        return false;
      }
      return failureCount < maxAttempts;
    },
  });

  useEffect(() => {
    if ((isSuccess || isError) && !isLoading && status.isPending) {
      attemptsRef.current += 1;
    }

    if (attemptsRef.current >= maxAttempts && status.isPending) {
      setStatus({
        isSuccess: false,
        isError: true,
        isPending: false,
        message: "Payment verification timed out. Please contact support.",
        errorCode: "TIMEOUT",
      });
      return;
    }

    if (isSuccess && data) {
      if (data.error) {
        console.log("IsSuccess & Data", data);
        setStatus({
          isSuccess: false,
          isError: true,
          isPending: false,
          message: data.message || "Payment failed",
          errorCode: data.errorCode || "PAYMENT_FAILED",
        });
      } else {
        setStatus({
          isSuccess: true,
          isError: false,
          isPending: false,
          message: data.message || "Payment successful",
          errorCode: null,
        });
      }
    }
  }, [data, isSuccess, isError, isLoading, status.isPending, maxAttempts]);

  const checkStatus = useCallback(() => {
    if (!enrollmentId) return null;
    attemptsRef.current = 0;
    setStatus({
      isSuccess: false,
      isError: false,
      isPending: true,
      message: "",
      errorCode: null,
    });
    return refetch();
  }, [enrollmentId, refetch]);

  useEffect(() => {
    if (enrollmentId && enabled && isOpen) {
      checkStatus();
    }
  }, [checkStatus, enabled, enrollmentId, isOpen]);

  return {
    ...status,
    data,
    checkStatus,
    attemptsCount: attemptsRef.current,
  };
};

export default useCheckPaymentStatus;
