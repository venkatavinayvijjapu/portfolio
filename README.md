# Portfolio Project

## Setup Instructions

1.  **Install Dependencies**
    Open your terminal in this directory and run:
    ```bash
    npm install
    ```

2.  **Run the Development Server**
    ```bash
    npm run dev:client
    ```
    This will start the Vite server on `http://localhost:5000`.

## Project Structure

- `client/`: Frontend React application
- `attached_assets/`: Images and static files (Resume, etc.)
- `shared/`: Shared types and schemas

## Notes

- The project uses `vite` for the build tool.
- Styling is handled by `tailwindcss` and `shadcn/ui` components.
- Resume and images are located in `attached_assets` and aliased as `@assets`.
