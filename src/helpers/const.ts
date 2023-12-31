/**
 * Stores constants
 */

// Firebase api keys and data
export const FIREBASE = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "",
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "",
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "",
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "",
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SERNDER_ID || "",
	appId: process.env.REACT_APP_FIREBASE_APP_ID || "",
};

// Button colors
export const BUTTON_LIST: string[] = [
	"theme",
	"danger",
	"warning",
	"success",
	"blank",
	"dark",
];
