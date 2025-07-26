# 🌟 TasteGPT – The Cultural Concierge

> A privacy-first, cross-domain personal assistant that truly _understands_ you.

---

## 🔧 Core Idea

**TasteGPT** is a chat-based assistant that suggests lifestyle and media choices — like movies, food, books, fashion, or travel — based on your mood, personality, or vague interests.

It leverages **GPT** for natural language understanding and **Qloo's Taste AI** for deeply personalized, cross-domain cultural recommendations.

---

## 🧠 How It Works (User Flow)

1. User opens the app/web app
2. Prompted with: **“What’s your vibe today?”**
   - Example: _“Feeling stressed. Want to unwind but not be bored.”_
3. GPT interprets mood and intent → maps it to contextual categories
4. Qloo API provides personalized recs across:
   - 🎵 **Music**: Lo-fi beats or 90s soul
   - 🎬 **Film**: Wes Anderson or Studio Ghibli
   - 🍜 **Food**: Vietnamese pho or tapas
   - 📍 **Place**: Book cafés, zen gardens, rooftop lounges
5. GPT formats the final response into a cohesive lifestyle plan
6. (Optional) User gives feedback → TasteGPT learns and refines future suggestions

---

## 🎥 Demo Use Case

**Prompt**: _“I just got dumped. Need a distraction. Nothing romantic please.”_

**Response**:

- 🎶 Music: Empowering indie rock
- 🎬 Movies: Action thrillers like _Mad Max: Fury Road_
- 🍜 Food: Spicy ramen or BBQ
- 📍 Travel: Kayaking or spontaneous road trip apps

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

# To start the dev server

1. Run `yarn install` to install all dependencies
2. Create `.env` in root project. Ask admin for env content
3. `yarn dev` to start the server

## Example of git workflow

# 1. Create and switch to the new branch

git checkout -b virtual-assistance

# 2. Now you're on nlp-pipeline branch. Just add and commit your changes:

git add .
git commit -m "Integrate TasteGpt virtual assitant"

# 3. Push the branch to remote

git push origin virtual-assistance

# 4. Switch back to the main branch

git checkout main

# 5. Pull latest changes from remote (optional, to sync)

git pull origin main

# 6. Merge the changes from nlp-pipeline into main

git merge virtual-assistance

# 7.

git push origin main
