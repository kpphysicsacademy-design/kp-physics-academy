# KP Physics Academy — Firebase App Schema

This schema is the backend plan for the Duolingo-style app. It is intentionally documented before adding project credentials.

## Collections

### users/{uid}
- displayName: string
- email: string
- photoUrl: string | null
- xp: number
- streak: number
- hearts: number
- dailyGoalXp: number
- createdAt: timestamp
- lastStudyDate: string (YYYY-MM-DD)

### physics_areas/{areaId}
- name: string
- icon: string
- description: string
- order: number

### concepts/{conceptId}
- areaId: string
- number: number (1–111)
- name: string
- slug: string
- order: number
- published: boolean

### lessons/{lessonId}
- conceptId: string
- title: string
- order: number
- xpReward: number
- published: boolean

### questions/{questionId}
- lessonId: string
- question: string
- options: array<string>
- correctIndex: number
- explanation: string
- difficulty: string
- exam: string (JEE Main / JEE Advanced / NEET)
- published: boolean

### user_progress/{uid}/concepts/{conceptId}
- completed: boolean
- mastery: number (0–100)
- lessonsCompleted: number
- lastAttemptAt: timestamp

### user_progress/{uid}/lessons/{lessonId}
- completed: boolean
- score: number
- attempts: number
- correct: number
- wrong: number
- xpEarned: number
- completedAt: timestamp | null

### user_progress/{uid}/questions/{questionId}
- attempts: number
- correct: number
- wrong: number
- lastAnsweredAt: timestamp
- mastered: boolean


### user_progress/{uid}/skillup/{classId}_{subjectId}_{chapterId}
- flash: number (0–100)
- practice: number (0–100)
- best: number (0–100)
- incorrectAnswers: array
- updatedAt: timestamp

### user_progress/{uid}/skillup_summary/{classId}_{subjectId}
- subjectProgress: number (0–100)
- chapters: map
- updatedAt: timestamp

## Multi-device backup flow

After Firebase Authentication resolves the user UID, each SkillUp progress update is written to Firestore under that UID. On another device, login loads the cloud progress and restores the local cache before rendering the dashboard. Use Firestore server timestamps and merge writes; protect each user's records with rules requiring request.auth.uid == uid.

## Learning flow

Home → Physics Path → Area → Concept → Lesson → Question → Result → XP → Progress → Unlock next.

## Important

Do not put Firebase API keys or service-account credentials in this markdown file or in public GitHub files. Firebase web configuration values can be public when protected by proper Firebase Security Rules; service-account private keys must never be committed.
