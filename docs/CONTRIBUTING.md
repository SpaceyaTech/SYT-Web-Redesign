# Contributing to the SpaceYaTech Website Redesign Project

<hr>

Please note that we do have [code of conduct](CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.

<hr>
We appreciate your interest in contributing to the SpaceYaTech website redesign project! This guide outlines the contribution process and provides instructions for creating or picking open issues, setting up the local development environment, making changes on a new branch, pushing changes to the upstream repository, submitting tasks for pull requests, and adding issue references and details to your pull requests.

## Creating or Picking Open Issues

1. Before starting any work, check the [GitHub Issues](https://github.com/SpaceyaTech/SYT-Web-Redesign/issues) section to find existing open issues related to the project. These issues cover various aspects of the redesign project, such as bug fixes, feature enhancements, and design improvements.

2. If you find an issue that you would like to work on, comment on the issue to express your interest in addressing it. A project maintainer will assign the issue to you, or provide additional information or guidance if needed.

3. If you can't find an existing issue that matches your desired contribution, feel free to create a new issue. Clearly describe the problem, feature request, or design enhancement you want to tackle. Provide as much information as possible to help others understand the context and requirements of the issue.

## Setting Up the Local Development Environment

To set up your local development environment, follow these steps:

1. Clone the project repository to your local machine:

   ```ssh
   git clone git@github.com:SpaceyaTech/SYT-Web-Redesign.git
   ```

   or

   ```HTTP
   git clone https://github.com/SpaceyaTech/SYT-Web-Redesign.git
   ```

2. Navigate to the project directory:

   ```
   cd SYT-Web-Redesign.
   ```

3. Install project dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm run dev
   ```

5. Access the website in your browser at `http://localhost:3000`. You can now make changes to the code and see them reflected in real-time on the local development server.

## Making Changes on a New Branch

To work on a new feature or bug fix, follow these steps to create and switch to a new branch:

1. Create a new branch based on the `main` branch:

   ```
   git checkout -b feature/your-feature-name
   ```

   Replace `your-feature-name` with a descriptive name for your feature or bug fix.

2. Make the necessary changes to the codebase using your preferred code editor or IDE.

3. Commit your changes with a meaningful commit message:
   ```
   git commit -m "Your commit message"
   ```

## Pushing Changes to the Upstream Repository

To push your changes to the upstream repository and make them available for review, follow these steps:

1. Push your changes to your forked repository:

   ```
   git push origin feature/your-feature-name
   ```

2. Open your forked repository on GitHub and navigate to the branch that contains your changes.

3. Click on the "New Pull Request" button to create a new pull request.

4. Provide a descriptive title and detailed description for your pull request. Include any relevant information, such as the problem you solved or the feature you implemented.

5. If your pull request addresses any open issues, reference the issue number in the description using the following format: `Fixes #<issue-number>`. This will automatically link the pull request to the respective issue.

6. Submit the pull request for review.

## Adding Issue References to Your Pull Request

If your pull request addresses any open issues, make sure to reference them in the pull request description using the format mentioned earlier (`Fixes #<issue-number>`). This helps track and link the pull request to the corresponding issue.

Additionally, provide details in your pull request description about the specific problem or feature that you have managed to solve. Explain

the changes you made and how they contribute to the overall project.

## Summary

By following these guidelines, you can effectively contribute to the SpaceYaTech website redesign project. Your contributions are highly valued and appreciated. Thank you for helping us improve the website and create a better experience for our users!
