# supermega_cms

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

---

## Description

Tech Blog CMS is a content management system for tech enthusiasts and developers who want to share their thoughts, articles, and opinions with a community of like-minded individuals. This application provides a user-friendly interface for creating, viewing, and managing blog posts. Users can sign up, log in, create new blog posts, comment on existing posts, and more.

---

## User Story

As a developer who writes about tech, I want a CMS-style blog site so that I can publish articles, blog posts, and my thoughts and opinions.

---

## Acceptance Criteria

- When I visit the site for the first time, I am presented with the homepage, which includes existing blog posts (if any have been posted), navigation links for the homepage and the dashboard, and the option to log in.

- When I click on the homepage option, I am taken to the homepage.

- When I click on any other links in the navigation, I am prompted to either sign up or sign in.

- When I choose to sign up, I am prompted to create a username and password.

- When I click on the sign-up button, my user credentials are saved, and I am logged into the site.

- When I revisit the site at a later time and choose to sign in, I am prompted to enter my username and password.

- When I am signed in to the site, I see navigation links for the homepage, the dashboard, and the option to log out.

- When I click on the homepage option in the navigation, I am taken to the homepage and presented with existing blog posts that include the post title and the date created.

- When I click on an existing blog post, I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment.

- When I enter a comment and click on the submit button while signed in, the comment is saved, and the post is updated to display the comment, the comment creator’s username, and the date created.

- When I click on the dashboard option in the navigation, I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post.

- When I click on the button to add a new blog post, I am prompted to enter both a title and contents for my blog post.

- When I click on the button to create a new blog post, the title and contents of my post are saved, and I am taken back to an updated dashboard with my new blog post.

- When I click on one of my existing posts in the dashboard, I am able to delete or update my post and taken back to an updated dashboard.

- When I click on the logout option in the navigation, I am signed out of the site.

- When I am idle on the site for more than a set time, I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete content.

---

## Installation

To run this application locally, you can follow these steps:

1. Clone the repository to your local machine:

git clone https://github.com/yourusername/supermega_cms.git


2. Navigate to the project's directory:

cd supermega_cms


3. Install the required dependencies:

npm install


4. Set up your MySQL database by creating a `.env` file in the root directory and adding your database credentials as follows:

DB_USER=yourusername
DB_PASSWORD=yourpassword
DB_NAME=supermegacms_db


Replace `yourusername` and `yourpassword` with your MySQL username and password. You can also change the `DB_NAME` to a different name if needed.

5. Run the application:

npm start


6. Open your web browser and access the application at `http://localhost:3000`.

---

## Usage

- Sign up for a new account or log in if you already have one.
- Create new blog posts with titles and content.
- View existing blog posts on the homepage.
- Comment on blog posts and see comments from other users.
- Edit or delete your own blog posts from the dashboard.
- Log out when you're done.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue if you find a bug or have any suggestions for improvements.

---

## Tests

No automated tests are provided at the moment. Testing can be added as needed.

---

## Questions

If you have any questions or need further assistance with the application, please [open an issue](https://github.com/yourusername/supermega_cms/issues) on GitHub or contact me via email at demasse1125@gmail.com.

You can also find more of my work on my GitHub profile: [https://github.com/OKJay50](https://github.com/OKJay50.
