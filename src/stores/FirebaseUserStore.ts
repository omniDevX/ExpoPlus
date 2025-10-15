import { create } from 'zustand';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

interface FirebaseUserState {
    firebaseUser: FirebaseAuthTypes.User | null;
    setFirebaseUser: (user: FirebaseAuthTypes.User | null) => void;
}

export const useFirebaseUserStore = create<FirebaseUserState>((set) => ({
    firebaseUser: null,
    setFirebaseUser: (user) => set({ firebaseUser: user }),
}));
