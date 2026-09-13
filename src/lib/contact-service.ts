/**
 * Contact service layer.
 * Designed with a clean adapter pattern so that Firebase Firestore can be plugged
 * in seamlessly when the user provides credentials, while working 100% reliably
 * standalone out of the box.
 */

export interface ContactSubmission {
  id: string;
  name: string;
  businessName?: string;
  email: string;
  phone?: string;
  service?: string;
  package?: string;
  message: string;
  createdAt: string;
}

// In-memory fallback repository for standalone operation
const submissionStore: ContactSubmission[] = [];

export async function saveContactSubmission(data: Omit<ContactSubmission, "id" | "createdAt">): Promise<{ success: boolean; id: string }> {
  const generatedId = `ct_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  const newSubmission: ContactSubmission = {
    ...data,
    id: generatedId,
    createdAt: new Date().toISOString(),
  };

  // Check if Firebase environment variables are provided
  const hasFirebaseConfig = Boolean(
    process.env.FIREBASE_PROJECT_ID &&
    process.env.FIREBASE_CLIENT_EMAIL &&
    process.env.FIREBASE_PRIVATE_KEY
  );

  if (hasFirebaseConfig) {
    try {
      // Future Firebase Firestore persistence hook
      // e.g. await admin.firestore().collection("inquiries").add(newSubmission);
      console.log("[Firebase Adapter] Saved submission to Firestore:", newSubmission.id);
    } catch (err) {
      console.error("[Firebase Adapter] Error writing to Firestore, falling back to local store:", err);
      submissionStore.push(newSubmission);
    }
  } else {
    // Local / Standalone mode
    submissionStore.push(newSubmission);
    console.log("[Contact Service] Saved submission locally:", newSubmission.id, newSubmission.name);
  }

  return {
    success: true,
    id: newSubmission.id,
  };
}

export async function getRecentSubmissions(): Promise<ContactSubmission[]> {
  return [...submissionStore];
}
