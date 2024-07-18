import PropTypes from "prop-types";

function SectionWrapper({ children }) {
  return <div className="px-4 md:px-10 lg:px-20 md:my-4">{children}</div>;
}
export default SectionWrapper;

SectionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
