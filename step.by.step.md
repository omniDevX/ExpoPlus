📱 App.tsx
│
└── NavigationContainer
    │
    └── Root_Stack.Navigator  (headerShown: false)
        │
        ├── HomeDrawer  →  HomeDrawerNavigator
        │       │
        │       └── Drawer.Navigator
        │             │
        │             └── Drawer.Screen: "HomeScreen"
        │                   ↳ component: HomeScreen
        │
        └── HomeStack  →  HomeStackNavigator
                │
                └── Stack.Navigator
                      │
                      ├── Stack.Screen: "HomeScreen"
                      │      ↳ component: HomeScreen
                      │      (headerShown: false)
                      │
                      ├── Stack.Screen: "BeautyScreen"
                      │      ↳ component: BeautyScreen
                      │      (title = route.params.title ?? "Beauty")
                      │
                      └── Stack.Screen: "SlideScreen"
                             ↳ component: SlideScreen
                             (headerShown: false)


+----------------------------------------------------+
| Root Stack Navigator                               |
|----------------------------------------------------|
|                                                    |
|  ┌──────────────────────────────┐   ┌────────────┐ |
|  │ HomeDrawerNavigator          │   │HomeStackNav│ |
|  │──────────────────────────────│   │────────────│ |
|  │  Drawer: HomeScreen          │   │Stack: Home │ |
|  │  (Custom Drawer Content)     │   │Stack: Beauty│ |
|  │                              │   │Stack: Slide │ |
|  └──────────────────────────────┘   └────────────┘ |
|                                                    |
+----------------------------------------------------+

RootStack
├── MainDrawer
│    └── HomeScreen
│
└── DetailStack
     ├── BeautyScreen
     └── SlideScreen

1. npm init -y
    get package.json
2. npm install --save-dev expo
2. npx expo install react react-native
3. npm install --save-dev expo-cli typescript @types/react @types/react-native
4. generate tsconfig.json
5. App.tsx
6. app.json
7. index.js



ad:
https://www.revenuecat.com/blog/engineering/ad-free-subscriptions-in-react-native/
npx expo install react-native-google-mobile-ads
npx expo install expo-build-properties

plugins": [
     	/// ... other plugins
      [
        "react-native-google-mobile-ads",
        {
          "iosAppId": "you-app-id",
          "androidAppId": "you-app-id"
        }
      ],
      [
        "expo-build-properties",
        {
          "ios": {
            "useFrameworks": "static"
          }
        }
      ]
    ],




.github/workflows
/build-app.yml


“The app saves images that users choose to download into their gallery.
It does not browse, read, or collect existing user photos or media.”

