# 🧩 ExpoPlus  
> The Universal Dev Client for Expo — *skip rebuilds, start coding instantly.*

[![Expo](https://img.shields.io/badge/Expo-Universal%20Dev%20Client-000?logo=expo&logoColor=white)](https://expo.dev)
[![React Native](https://img.shields.io/badge/React%20Native-Ready-blue?logo=react)](https://reactnative.dev)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-orange)](#)

---

## 🚀 What is ExpoPlus?

**ExpoPlus** is a **prebuilt, universal Expo Dev Client** that includes the **most common React Native modules**, so you can **skip rebuilds** and get coding right away.

No more waiting for `eas build` every time you add a native dependency.  
With **ExpoPlus**, you start with a dev client that’s ready for 90% of real-world use cases.

---

## ⚙️ ExpoPlus v1 — Included Modules

ExpoPlus v1 is built on **Expo SDK 54**, **React 19**, and **React Native 0.81.4** — covering the essentials for production-grade apps.

| Category | Modules | Notes |
|-----------|----------|-------|
| **Core** | `react`, `react-native`, `expo` | SDK 54 compatible |
| **Navigation** | `@react-navigation/native-stack`, `@react-navigation/drawer`, `@react-navigation/stack` | Full navigation stack |
| **UI / Animation** | `react-native-reanimated`, `react-native-gesture-handler`, `react-native-safe-area-context`, `react-native-screens` | Smooth animations & gestures |
| **System & Device** | `expo-file-system`, `expo-font`, `expo-status-bar`, `expo-splash-screen` | Core system integration |
| **Media & Sharing** | `expo-sharing` | Native share support |
| **Ads & Monetization** | `react-native-google-mobile-ads` | AdMob-ready build |
| **Utilities** | `axios`, `react-native-toast-message`, `react-native-worklets` | Networking, UI feedback, worklets |
| **Dev Tools** | `expo-dev-client`, `expo-build-properties` | Custom dev client support |

> 💡 Version base:  
> - Expo SDK: **54**  
> - React Native: **0.81.4**  
> - React: **19.1.0**  
> - TypeScript: **5.9.2**

---

## ⚡️ Used in Real Apps

ExpoPlus is already powering real-world projects built with React Native and Expo:

| App | Description |
|-----|--------------|
| **App1** | A mobile invoicing and payment management tool using Expo Router, Zustand, and Firebase — built entirely with ExpoPlus for instant iteration. |
| **App2** | A social and analytics app featuring camera, sharing, and notifications — all running out-of-the-box with ExpoPlus. |

> 🧠 These implementations show ExpoPlus can handle Firebase, navigation, ads, and animations without rebuild friction.

---

## 🧪 Quick Start

```bash
npx create-expo-app myapp
cd myapp
npx expo install expo-dev-client
# Use ExpoPlus as your dev client
npx expoplus run:android
