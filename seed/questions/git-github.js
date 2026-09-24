const gitGithubQuestions = [
  {
    question: "What is Git?",
    options: [
      "A programming language",
      "A distributed version control system",
      "A database management system",
      "A web browser"
    ],
    correctAnswer: 1,
    explanation:
      "Git is a distributed version control system used to track changes in files and coordinate work among developers.",
    difficulty: "Easy",
    topic: "Git Basics"
  },

  {
    question: "What is GitHub?",
    options: [
      "A programming language",
      "A cloud-based platform for hosting and collaborating on Git repositories",
      "An operating system",
      "A database"
    ],
    correctAnswer: 1,
    explanation:
      "GitHub is a platform that hosts Git repositories and provides collaboration features such as pull requests, issues, and code review.",
    difficulty: "Easy",
    topic: "GitHub Basics"
  },

  {
    question: "What is a Git repository?",
    options: [
      "A place where Git tracks a project's files and history",
      "A programming language",
      "A text editor",
      "A web server"
    ],
    correctAnswer: 0,
    explanation:
      "A Git repository contains project files along with the information Git uses to track their history.",
    difficulty: "Easy",
    topic: "Repositories"
  },

  {
    question: "Which command initializes a new Git repository?",
    options: [
      "git start",
      "git create",
      "git init",
      "git new"
    ],
    correctAnswer: 2,
    explanation:
      "git init initializes a new Git repository in the current directory.",
    difficulty: "Easy",
    topic: "Git Commands"
  },

  {
    question: "Which command shows the current state of a Git working directory?",
    options: [
      "git state",
      "git status",
      "git check",
      "git info"
    ],
    correctAnswer: 1,
    explanation:
      "git status shows modified, staged, and untracked files in the working directory.",
    difficulty: "Easy",
    topic: "Git Commands"
  },

  {
    question: "Which command is used to add a file to the staging area?",
    options: [
      "git add",
      "git stage-file",
      "git save",
      "git upload"
    ],
    correctAnswer: 0,
    explanation:
      "git add stages changes so they can be included in the next commit.",
    difficulty: "Easy",
    topic: "Git Commands"
  },

  {
    question: "Which command stages all changes in the current directory?",
    options: [
      "git add all",
      "git add .",
      "git stage *",
      "git commit ."
    ],
    correctAnswer: 1,
    explanation:
      "git add . stages new, modified, and deleted files under the current directory.",
    difficulty: "Easy",
    topic: "Git Commands"
  },

  {
    question: "Which command creates a commit?",
    options: [
      "git save",
      "git commit",
      "git push",
      "git record"
    ],
    correctAnswer: 1,
    explanation:
      "git commit records staged changes in the repository history.",
    difficulty: "Easy",
    topic: "Git Commands"
  },

  {
    question: "Which option is commonly used to add a commit message?",
    options: [
      "git commit -m",
      "git commit -msg",
      "git commit --text",
      "git commit -message"
    ],
    correctAnswer: 0,
    explanation:
      "git commit -m \"message\" creates a commit with the specified commit message.",
    difficulty: "Easy",
    topic: "Git Commands"
  },

  {
    question: "What is the staging area in Git?",
    options: [
      "A temporary area where selected changes are prepared for the next commit",
      "A GitHub server",
      "A branch",
      "A remote repository"
    ],
    correctAnswer: 0,
    explanation:
      "The staging area allows developers to select which changes should be included in the next commit.",
    difficulty: "Easy",
    topic: "Git Basics"
  },

  {
    question: "Which command displays the commit history?",
    options: [
      "git history",
      "git commits",
      "git log",
      "git records"
    ],
    correctAnswer: 2,
    explanation:
      "git log displays the commit history of a repository.",
    difficulty: "Easy",
    topic: "Git Commands"
  },

  {
    question: "Which command displays a compact version of Git commit history?",
    options: [
      "git log --short",
      "git log --oneline",
      "git history --small",
      "git commits -short"
    ],
    correctAnswer: 1,
    explanation:
      "git log --oneline displays each commit in a compact single-line format.",
    difficulty: "Easy",
    topic: "Git Commands"
  },

  {
    question: "What is a Git branch?",
    options: [
      "An independent line of development",
      "A GitHub account",
      "A file type",
      "A repository password"
    ],
    correctAnswer: 0,
    explanation:
      "A branch provides an independent line of development so changes can be made without directly affecting another branch.",
    difficulty: "Easy",
    topic: "Branches"
  },

  {
    question: "Which command lists Git branches?",
    options: [
      "git branches",
      "git list-branches",
      "git branch",
      "git show-branches"
    ],
    correctAnswer: 2,
    explanation:
      "git branch lists local branches and indicates the currently checked-out branch.",
    difficulty: "Easy",
    topic: "Branches"
  },

  {
    question: "Which command creates a new branch?",
    options: [
      "git branch branch-name",
      "git new branch-name",
      "git create branch-name",
      "git add branch-name"
    ],
    correctAnswer: 0,
    explanation:
      "git branch branch-name creates a new branch without switching to it.",
    difficulty: "Easy",
    topic: "Branches"
  },

  {
    question: "Which command creates a branch and switches to it in one step?",
    options: [
      "git branch -new",
      "git checkout -b branch-name",
      "git switch branch-name --create-only",
      "git create-switch branch-name"
    ],
    correctAnswer: 1,
    explanation:
      "git checkout -b branch-name creates the branch and switches to it. Modern Git also supports git switch -c branch-name.",
    difficulty: "Easy",
    topic: "Branches"
  },

  {
    question: "Which modern Git command switches to another branch?",
    options: [
      "git move",
      "git switch",
      "git change",
      "git branch-switch"
    ],
    correctAnswer: 1,
    explanation:
      "git switch is the modern Git command designed specifically for switching branches.",
    difficulty: "Easy",
    topic: "Branches"
  },

  {
    question: "Which command merges another branch into the current branch?",
    options: [
      "git combine",
      "git merge",
      "git join",
      "git integrate"
    ],
    correctAnswer: 1,
    explanation:
      "git merge combines the changes from another branch into the currently checked-out branch.",
    difficulty: "Easy",
    topic: "Merging"
  },

  {
    question: "What is a merge conflict?",
    options: [
      "A situation where Git cannot automatically combine conflicting changes",
      "A network error",
      "A missing GitHub account",
      "A deleted repository"
    ],
    correctAnswer: 0,
    explanation:
      "A merge conflict occurs when Git cannot automatically determine which conflicting changes should be kept.",
    difficulty: "Medium",
    topic: "Merging"
  },

  {
    question: "What should you do after resolving a merge conflict?",
    options: [
      "Delete the repository",
      "Stage the resolved files and commit the result",
      "Run git init again",
      "Create a new GitHub account"
    ],
    correctAnswer: 1,
    explanation:
      "After resolving conflicts, the resolved files should be staged and the merge resolution should be committed.",
    difficulty: "Easy",
    topic: "Merging"
  },

  {
    question: "What is a remote repository?",
    options: [
      "A repository hosted somewhere other than your local machine",
      "A temporary folder",
      "A local Git branch",
      "A commit message"
    ],
    correctAnswer: 0,
    explanation:
      "A remote repository is a Git repository hosted on another machine or service, such as GitHub.",
    difficulty: "Easy",
    topic: "Remote Repositories"
  },

  {
    question: "Which command adds a remote repository?",
    options: [
      "git remote add",
      "git add remote",
      "git remote create",
      "git connect remote"
    ],
    correctAnswer: 0,
    explanation:
      "git remote add origin URL associates a remote repository with a local repository.",
    difficulty: "Easy",
    topic: "Remote Repositories"
  },

  {
    question: "What is commonly used as the name of the main remote repository?",
    options: [
      "main",
      "origin",
      "remote",
      "github"
    ],
    correctAnswer: 1,
    explanation:
      "origin is the conventional default name used for the primary remote repository.",
    difficulty: "Easy",
    topic: "Remote Repositories"
  },

  {
    question: "Which command displays configured remote repositories?",
    options: [
      "git remote -v",
      "git show remotes",
      "git list remote",
      "git remote-list"
    ],
    correctAnswer: 0,
    explanation:
      "git remote -v displays the names and URLs of configured remote repositories.",
    difficulty: "Easy",
    topic: "Remote Repositories"
  },

  {
    question: "Which command uploads local commits to a remote repository?",
    options: [
      "git upload",
      "git push",
      "git send",
      "git publish"
    ],
    correctAnswer: 1,
    explanation:
      "git push sends local commits to a remote repository.",
    difficulty: "Easy",
    topic: "Git Commands"
  },

  {
    question: "Which command downloads changes from a remote repository without merging them?",
    options: [
      "git pull",
      "git fetch",
      "git download",
      "git sync"
    ],
    correctAnswer: 1,
    explanation:
      "git fetch downloads remote updates and updates remote-tracking references without automatically merging them into the current branch.",
    difficulty: "Medium",
    topic: "Remote Repositories"
  },

  {
    question: "What does git pull generally do?",
    options: [
      "Only uploads commits",
      "Fetches remote changes and integrates them into the current branch",
      "Deletes remote branches",
      "Creates a new repository"
    ],
    correctAnswer: 1,
    explanation:
      "git pull generally performs a fetch followed by integration of the fetched changes into the current branch.",
    difficulty: "Easy",
    topic: "Remote Repositories"
  },

  {
    question: "What is the difference between git fetch and git pull?",
    options: [
      "There is no difference",
      "fetch downloads changes without integrating them, while pull downloads and integrates them",
      "pull only downloads files",
      "fetch deletes local changes"
    ],
    correctAnswer: 1,
    explanation:
      "git fetch retrieves remote updates without changing the current branch, while git pull retrieves and integrates those updates.",
    difficulty: "Medium",
    topic: "Remote Repositories"
  },

  {
    question: "What is GitHub used for?",
    options: [
      "Code hosting and collaboration",
      "Only writing documents",
      "Only creating databases",
      "Only designing graphics"
    ],
    correctAnswer: 0,
    explanation:
      "GitHub provides Git repository hosting along with collaboration features such as pull requests, issues, actions, and code review.",
    difficulty: "Easy",
    topic: "GitHub Basics"
  },

  {
    question: "What is a GitHub repository?",
    options: [
      "A hosted project repository containing code and its Git history",
      "A programming language",
      "A computer driver",
      "A database table"
    ],
    correctAnswer: 0,
    explanation:
      "A GitHub repository hosts a project's source code, Git history, and related project files.",
    difficulty: "Easy",
    topic: "GitHub Basics"
  },

  {
    question: "What is a Pull Request on GitHub?",
    options: [
      "A request to merge changes from one branch into another",
      "A request to download Git",
      "A request to delete a repository",
      "A request to create a password"
    ],
    correctAnswer: 0,
    explanation:
      "A Pull Request allows developers to propose changes and request that they be reviewed and merged into another branch.",
    difficulty: "Easy",
    topic: "Pull Requests"
  },

  {
    question: "What is a GitHub Issue?",
    options: [
      "A tool for tracking bugs, tasks, questions, or feature requests",
      "A Git commit",
      "A branch",
      "A programming language"
    ],
    correctAnswer: 0,
    explanation:
      "GitHub Issues can be used to track bugs, tasks, improvements, questions, and feature requests.",
    difficulty: "Easy",
    topic: "GitHub Features"
  },

  {
    question: "What is a fork on GitHub?",
    options: [
      "A personal copy of another user's repository under your account",
      "A Git commit",
      "A local branch",
      "A merge conflict"
    ],
    correctAnswer: 0,
    explanation:
      "A fork creates a copy of a repository under another GitHub account, commonly used when contributing to projects you do not directly own.",
    difficulty: "Easy",
    topic: "GitHub Features"
  },

  {
    question: "What is a Git tag?",
    options: [
      "A reference that usually marks a specific point in Git history",
      "A GitHub password",
      "A branch that automatically deletes itself",
      "A temporary file"
    ],
    correctAnswer: 0,
    explanation:
      "Tags are commonly used to mark specific points in repository history, such as software release versions.",
    difficulty: "Medium",
    topic: "Git Tags"
  },

  {
    question: "Which command creates a lightweight Git tag?",
    options: [
      "git tag v1.0",
      "git create-tag v1.0",
      "git mark v1.0",
      "git version v1.0"
    ],
    correctAnswer: 0,
    explanation:
      "git tag v1.0 creates a lightweight tag named v1.0.",
    difficulty: "Easy",
    topic: "Git Tags"
  },

  {
    question: "What is .gitignore used for?",
    options: [
      "Specifying files and directories Git should ignore",
      "Ignoring GitHub users",
      "Deleting Git history",
      "Ignoring commits"
    ],
    correctAnswer: 0,
    explanation:
      ".gitignore specifies files and directories that Git should not normally track, such as node_modules or environment files.",
    difficulty: "Easy",
    topic: "Git Configuration"
  },

  {
    question: "Which file is commonly used to store Node.js dependencies that should not be committed?",
    options: [
      "package.json",
      "node_modules",
      "README.md",
      "index.html"
    ],
    correctAnswer: 1,
    explanation:
      "The node_modules directory contains installed dependencies and is normally excluded from Git using .gitignore.",
    difficulty: "Easy",
    topic: "Git Configuration"
  },

  {
    question: "Which Git command shows differences between working changes and the index?",
    options: [
      "git difference",
      "git diff",
      "git compare",
      "git changes"
    ],
    correctAnswer: 1,
    explanation:
      "git diff shows differences between changes in the working tree and the index or between other Git states depending on the options used.",
    difficulty: "Medium",
    topic: "Git Commands"
  },

  {
    question: "Which command unstages a file while keeping its changes in the working directory?",
    options: [
      "git reset HEAD file",
      "git delete file",
      "git remove-stage file",
      "git undo file"
    ],
    correctAnswer: 0,
    explanation:
      "git reset HEAD file can unstage a file while leaving its working-directory changes intact.",
    difficulty: "Medium",
    topic: "Git Commands"
  },

  {
    question: "What does git clone do?",
    options: [
      "Creates a local copy of a remote repository",
      "Deletes a remote repository",
      "Creates a new branch only",
      "Uploads local files"
    ],
    correctAnswer: 0,
    explanation:
      "git clone downloads a repository from a remote source and creates a local working copy.",
    difficulty: "Easy",
    topic: "Git Commands"
  },

  {
    question: "Which command can remove a tracked file from Git and the working directory?",
    options: [
      "git delete",
      "git rm",
      "git remove-file",
      "git erase"
    ],
    correctAnswer: 1,
    explanation:
      "git rm removes a tracked file from Git and the working directory.",
    difficulty: "Easy",
    topic: "Git Commands"
  },

  {
    question: "What is git revert used for?",
    options: [
      "Creating a new commit that reverses the changes introduced by an earlier commit",
      "Deleting all Git history",
      "Creating a new repository",
      "Downloading GitHub"
    ],
    correctAnswer: 0,
    explanation:
      "git revert creates a new commit that reverses the changes introduced by a specified earlier commit.",
    difficulty: "Medium",
    topic: "Git History"
  },

  {
    question: "What is git reset commonly used for?",
    options: [
      "Moving the current branch pointer and optionally changing the index or working tree",
      "Creating a GitHub account",
      "Uploading files to GitHub",
      "Creating a README file"
    ],
    correctAnswer: 0,
    explanation:
      "git reset can move the current branch reference and, depending on the mode, modify the staging area and working tree.",
    difficulty: "Hard",
    topic: "Git History"
  },

  {
    question: "What is the main difference between git revert and git reset?",
    options: [
      "Revert creates a new commit to undo changes, while reset moves the branch reference",
      "They are exactly the same",
      "Reset only works with GitHub",
      "Revert deletes the repository"
    ],
    correctAnswer: 0,
    explanation:
      "git revert preserves history by creating a new reversing commit, while git reset moves a branch reference and can rewrite local history.",
    difficulty: "Hard",
    topic: "Git History"
  },

  {
    question: "What is a merge commit?",
    options: [
      "A commit that combines the histories of two branches",
      "A commit that deletes a branch",
      "A commit containing only documentation",
      "A commit created automatically by GitHub every day"
    ],
    correctAnswer: 0,
    explanation:
      "A merge commit combines the histories of two branches when Git performs a non-fast-forward merge.",
    difficulty: "Medium",
    topic: "Merging"
  },

  {
    question: "What is a fast-forward merge?",
    options: [
      "A merge where the target branch pointer can simply move forward",
      "A merge that always creates two commits",
      "A merge that deletes both branches",
      "A merge that requires a pull request"
    ],
    correctAnswer: 0,
    explanation:
      "A fast-forward merge occurs when the target branch has no divergent commits and its pointer can move directly to the source branch tip.",
    difficulty: "Medium",
    topic: "Merging"
  },

  {
    question: "What is a commit hash?",
    options: [
      "A unique identifier generated for a Git commit",
      "A GitHub username",
      "A branch name",
      "A repository URL"
    ],
    correctAnswer: 0,
    explanation:
      "Git assigns each commit a hash that serves as an identifier for that commit.",
    difficulty: "Easy",
    topic: "Git History"
  },

  {
    question: "What is HEAD in Git?",
    options: [
      "A reference to the currently checked-out commit or branch position",
      "The name of the GitHub server",
      "The first file in a repository",
      "A Git password"
    ],
    correctAnswer: 0,
    explanation:
      "HEAD is a reference indicating the currently checked-out commit, usually through the current branch.",
    difficulty: "Medium",
    topic: "Git Basics"
  },

  {
    question: "What is a detached HEAD state?",
    options: [
      "HEAD points directly to a commit instead of a branch",
      "The repository has no commits",
      "GitHub is offline",
      "A branch has been deleted remotely"
    ],
    correctAnswer: 0,
    explanation:
      "In a detached HEAD state, HEAD points directly to a commit rather than the tip of a branch.",
    difficulty: "Hard",
    topic: "Git Basics"
  },

  {
    question: "What is GitHub Actions?",
    options: [
      "A platform for automating workflows such as testing and deployment",
      "A Git branch",
      "A Git command",
      "A database system"
    ],
    correctAnswer: 0,
    explanation:
      "GitHub Actions provides automation for workflows such as CI, testing, builds, and deployments.",
    difficulty: "Medium",
    topic: "GitHub Actions"
  },

  {
    question: "What does CI commonly stand for in software development?",
    options: [
      "Continuous Integration",
      "Code Installation",
      "Central Interface",
      "Continuous Internet"
    ],
    correctAnswer: 0,
    explanation:
      "CI stands for Continuous Integration, where code changes are frequently integrated and automatically tested.",
    difficulty: "Easy",
    topic: "CI/CD"
  },

  {
    question: "What does CD commonly refer to in CI/CD?",
    options: [
      "Continuous Delivery or Continuous Deployment",
      "Code Database",
      "Central Development",
      "Computer Distribution"
    ],
    correctAnswer: 0,
    explanation:
      "In CI/CD, CD commonly refers to Continuous Delivery and/or Continuous Deployment.",
    difficulty: "Easy",
    topic: "CI/CD"
  },

  {
    question: "Which file is commonly used to describe a GitHub repository to visitors?",
    options: [
      "README.md",
      "package.lock",
      "git.config",
      "repository.txt"
    ],
    correctAnswer: 0,
    explanation:
      "README.md commonly contains information about the project, installation steps, usage, features, and contribution instructions.",
    difficulty: "Easy",
    topic: "GitHub Basics"
  },

  {
    question: "What is code review?",
    options: [
      "Examining code changes to identify problems and improve quality",
      "Deleting old branches",
      "Installing Git",
      "Creating a repository"
    ],
    correctAnswer: 0,
    explanation:
      "Code review is the process of examining code changes before or after integration to identify issues and improve code quality.",
    difficulty: "Easy",
    topic: "Code Review"
  },

  {
    question: "What is the purpose of a Pull Request review?",
    options: [
      "To discuss and evaluate proposed code changes before merging",
      "To delete the source branch automatically",
      "To install Git",
      "To change the GitHub password"
    ],
    correctAnswer: 0,
    explanation:
      "Pull Request reviews allow team members to inspect proposed changes, leave comments, and discuss improvements before merging.",
    difficulty: "Easy",
    topic: "Pull Requests"
  },

  {
    question: "Which command shows the current branch name and local branches?",
    options: [
      "git branch",
      "git current",
      "git branches-list",
      "git status-branch-only"
    ],
    correctAnswer: 0,
    explanation:
      "git branch lists local branches and marks the current branch with an asterisk.",
    difficulty: "Easy",
    topic: "Branches"
  }
];

module.exports = gitGithubQuestions;