# Ghaith Chat Application - Project Structure

## Overview

This is a modern Next.js chat application with authentication, real-time messaging, and internationalization support. The application uses Supabase for backend services and follows a well-organized component structure.

## Directory Structure

```
📦 ghaith-chat-app
 ┣ 📂 .vscode                      # VS Code configuration
 ┃ ┣ 📜 extensions.json
 ┃ ┗ 📜 settings.json
 ┣ 📂 app                          # Next.js app directory (App Router)
 ┃ ┣ 📂 _components                 # Reusable UI components
 ┃ ┃ ┣ 📂 chat                      # Chat-related components
 ┃ ┃ ┃ ┣ 📜 BackArrow.tsx
 ┃ ┃ ┃ ┣ 📜 Chat.tsx                # Main chat component
 ┃ ┃ ┃ ┣ 📜 ChatContainer.tsx       # Container for chat messages
 ┃ ┃ ┃ ┣ 📜 ChatHead.tsx            # Header for chat window
 ┃ ┃ ┃ ┣ 📜 ChatSender.tsx          # Message input component
 ┃ ┃ ┃ ┣ 📜 EmojisPicker.tsx        # Emoji selector component
 ┃ ┃ ┃ ┣ 📜 InfoButton.tsx
 ┃ ┃ ┃ ┣ 📜 OtherMessage.tsx         # Component for received messages
 ┃ ┃ ┃ ┗ 📜 SelfMessage.tsx          # Component for sent messages
 ┃ ┃ ┣ 📂 details                   # User and chat details components
 ┃ ┃ ┃ ┣ 📂 settings                # Settings-related components
 ┃ ┃ ┃ ┃ ┣ 📜 AppSettings.tsx        # Application settings
 ┃ ┃ ┃ ┃ ┣ 📜 CurrUserData.tsx       # Current user data display
 ┃ ┃ ┃ ┃ ┗ 📜 UserAvatar.tsx         # User avatar component
 ┃ ┃ ┃ ┣ 📜 ChatSettings.tsx         # Chat settings component
 ┃ ┃ ┃ ┣ 📜 Details.tsx              # Main details component
 ┃ ┃ ┃ ┣ 📜 FriendDetails.tsx        # Friend details display
 ┃ ┃ ┃ ┣ 📜 PrivacyAndHelp.tsx       # Privacy and help section
 ┃ ┃ ┃ ┣ 📜 SharedFiles.tsx          # Shared files display
 ┃ ┃ ┃ ┣ 📜 SharedPhoto.tsx          # Individual shared photo
 ┃ ┃ ┃ ┗ 📜 SharedPhotos.tsx         # Shared photos gallery
 ┃ ┃ ┣ 📂 list                      # Chat list components
 ┃ ┃ ┃ ┣ 📜 AddUser.tsx              # Add new user component
 ┃ ┃ ┃ ┣ 📜 ChatItem.tsx             # Individual chat item
 ┃ ┃ ┃ ┣ 📜 ChatList.tsx             # List of chats
 ┃ ┃ ┃ ┣ 📜 List.tsx                 # Main list component
 ┃ ┃ ┃ ┣ 📜 ListHead.tsx             # Header for chat list
 ┃ ┃ ┃ ┣ 📜 Search.tsx               # Search component
 ┃ ┃ ┃ ┣ 📜 SearchAndAdd.tsx         # Search and add users
 ┃ ┃ ┃ ┗ 📜 UserInfo.tsx             # User information display
 ┃ ┃ ┗ 📂 ui                        # General UI components
 ┃ ┃   ┣ 📜 GeneralMenu.tsx          # General menu component
 ┃ ┃   ┣ 📜 GoogleLogin.tsx          # Google login button
 ┃ ┃   ┣ 📜 InitialAvatar.tsx        # Initial-based avatar
 ┃ ┃   ┣ 📜 InitialAvatarFriends.tsx # Avatar for friends
 ┃ ┃   ┣ 📜 InputField.tsx           # Reusable input field
 ┃ ┃   ┣ 📜 LoginAndSignupTemp.tsx   # Login/Signup template
 ┃ ┃   ┣ 📜 Menus.tsx                # Menu components
 ┃ ┃   ┣ 📜 Modal.tsx                # Modal component
 ┃ ┃   ┣ 📜 ReusableAvatar.tsx       # Reusable avatar component
 ┃ ┃   ┣ 📜 Spinner.tsx              # Loading spinner
 ┃ ┃   ┣ 📜 SubmitButton.tsx         # Submit button component
 ┃ ┃   ┣ 📜 WelcomeText.tsx          # Welcome text component
 ┃ ┃   ┗ 📜 WrapperComponent.tsx     # Main wrapper component
 ┃ ┣ 📂 _context                    # React context providers
 ┃ ┃ ┣ 📜 useChatting.tsx           # Chat context
 ┃ ┃ ┣ 📜 useCurrUser.tsx           # Current user context
 ┃ ┃ ┗ 📜 useSettings.tsx           # Settings context
 ┃ ┣ 📂 _helpers                    # Helper functions
 ┃ ┃ ┣ 📜 classNames.ts             # CSS class utility
 ┃ ┃ ┗ 📜 getCurrUser.ts            # Get current user helper
 ┃ ┣ 📂 _hooks                      # Custom React hooks
 ┃ ┃ ┣ 📜 useClickOutside.ts        # Click outside detection
 ┃ ┃ ┗ 📜 useFormValidation.ts      # Form validation hook
 ┃ ┣ 📂 _lib                        # Library code
 ┃ ┃ ┣ 📜 actions.ts                # Server actions
 ┃ ┃ ┣ 📜 api.ts                    # API functions
 ┃ ┃ ┗ 📜 supabase.ts               # Supabase client
 ┃ ┣ 📂 login                       # Login page
 ┃ ┃ ┣ 📜 LoginForm.tsx             # Login form component
 ┃ ┃ ┣ 📜 error.tsx                 # Error handling
 ┃ ┃ ┗ 📜 page.tsx                  # Login page component
 ┃ ┣ 📂 signup                      # Signup page
 ┃ ┃ ┣ 📜 SignupForm.tsx            # Signup form component
 ┃ ┃ ┣ 📜 error.tsx                 # Error handling
 ┃ ┃ ┗ 📜 page.tsx                  # Signup page component
 ┃ ┣ 📜 error.tsx                   # Global error handling
 ┃ ┣ 📜 globals.css                 # Global CSS styles
 ┃ ┣ 📜 icon.png                    # App icon
 ┃ ┣ 📜 layout.tsx                  # Root layout component
 ┃ ┣ 📜 loading.tsx                 # Loading component
 ┃ ┣ 📜 not-found.tsx               # 404 page
 ┃ ┗ 📜 page.tsx                    # Home page component
 ┣ 📂 i18n                          # Internationalization
 ┃ ┗ 📜 request.ts                  # i18n request handler
 ┣ 📂 messages                      # Translation messages
 ┃ ┣ 📜 ar.json                     # Arabic translations
 ┃ ┗ 📜 en.json                     # English translations
 ┣ 📂 public                        # Static assets
 ┃ ┣ 📜 avatar.png                  # Default avatar
 ┃ ┣ 📜 background.jpg              # Background image
 ┃ ┣ 📜 bg.jpg                      # Alternative background
 ┃ ┣ 📜 photoBG.jpg                 # Photo background
 ┃ ┗ 📜 theme.png                   # Theme image
 ┣ 📜 .gitignore                    # Git ignore file
 ┣ 📜 .prettierrc                   # Prettier configuration
 ┣ 📜 README.md                     # Project readme
 ┣ 📜 database.types.ts             # Database type definitions
 ┣ 📜 eslint.config.mjs             # ESLint configuration
 ┣ 📜 next.config.ts                # Next.js configuration
 ┣ 📜 package-lock.json             # NPM lock file
 ┣ 📜 package.json                  # Project dependencies
 ┣ 📜 postcss.config.mjs            # PostCSS configuration
 ┗ 📜 tsconfig.json                 # TypeScript configuration
```

## Key Technologies

- **Next.js 15**: Modern React framework with App Router
- **React 19**: UI library
- **Supabase**: Backend-as-a-Service for authentication and database
- **next-intl**: Internationalization support (Arabic and English)
- **TailwindCSS 4**: Utility-first CSS framework
- **TypeScript**: Type-safe JavaScript
- **Framer Motion**: Animation library
- **React Hot Toast**: Toast notifications
- **Emoji Picker React**: Emoji selection component

## Application Structure

### Authentication Flow

- User signup/login via Supabase Auth
- Cookie-based session management
- Protected routes with server-side redirection

### Main Components

- **List**: Shows all chats and contacts
- **Chat**: Real-time messaging interface
- **Details**: User and chat settings

### Data Flow

- Server actions for data mutations
- Context providers for state management
- Supabase real-time subscriptions for messages

### Internationalization

- Support for English and Arabic languages
- RTL layout support for Arabic

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```
