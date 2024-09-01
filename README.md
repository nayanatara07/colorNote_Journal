# 📝 Color Note Journal
[Color Note Journal](https://colornote-journal.vercel.app/) is a simple yet elegant journaling app built with React. It allows users to create, edit, and delete notes, with each note randomly assigned a unique background color. The app stores notes locally in the browser's local storage, so your thoughts and ideas are saved even if you close the app or refresh the page.

## 🎨 Features

- **Create Notes**: Write down your thoughts, ideas, or anything else that comes to mind.
- **Edit Notes**: Update your notes anytime with ease.
- **Delete Notes**: Remove notes that you no longer need.
- **Color-Coded Notes**: Each note is automatically assigned a random background color for a visually pleasing experience.
- **Local Storage**: All notes are saved in the browser's local storage, ensuring they persist across sessions.

## 🚀 Getting Started

To get started with the Color Note Journal app on your local machine, follow these steps:

### Prerequisites

Make sure you have Node.js installed on your machine. If not, you can download it [here](https://nodejs.org/).

### Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/nayanatara07/colornote_journal.git
    cd color-note-journal
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Run the App:**

    ```bash
    npm start
    ```

    The app will run locally on `http://localhost:3000`.

## 🛠️ Usage

- **Writing a Note**: Simply type your note in the text area and click the "Save Note" button. Your note will appear in the list below, with a randomly assigned background color.
- **Editing a Note**: Click the "Edit" button on any note. The note's content will appear in the text area, where you can make changes and save the updated note.
- **Deleting a Note**: Click the "Delete" button on any note to remove it from the list.

## 🎨 Customization

The app comes with a predefined set of colors that are randomly assigned to notes. You can easily modify these colors in the `getRandomColor` function within the `Journal.js` file.

## 📦 Project Structure

Here's an overview of the project's file structure:

```
color-note-journal/
├── public/
├── src/
│   ├── components/
│   ├── App.js
│   ├── Journal.js
│   ├── Journal.css
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

- `Journal.js`: Contains the main logic for creating, editing, deleting, and displaying notes.
- `Journal.css`: Styles the journal app, making it visually appealing.

## 🌟 Contributing

Contributions are welcome! If you have suggestions for improvements, feel free to open an issue or submit a pull request.

## 🙏 Acknowledgements

- Thanks to the React community for their continuous support and resources.

