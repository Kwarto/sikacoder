export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Data Analysis & Visualization Masterclass",
  description:
    "Master data analysis and visualization techniques through hands-on coding tasks, downloadable resources, and practical projects. Perfect for beginners with no prior programming experience.",
  provider: {
    "@type": "Organization",
    name: "Your Website Name",
    sameAs: "https://yourwebsite.com"
  },
  educationalLevel: "Beginner",
  educationalCredentialAwarded: "Certificate, Awards & Recommendation",
  timeRequired: "P3M",
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Online",
    instructor: {
      "@type": "Person",
      name: "Instructor Name"
    },
    startDate: "2025-06-01",
    endDate: "2025-09-01",
    location: {
      "@type": "VirtualLocation",
      url: "https://yourwebsite.com/course/data-analysis-masterclass"
    }
  },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
    audienceType: "Beginners, Aspiring Developers, Startup Founders"
  },
  learningResourceType: [
    "Coding Tasks",
    "Downloadable Resources",
    "Articles",
    "Internship",
    "Resume Builder"
  ],
  coursePrerequisites:
    "No programming experience needed. Basic computer and internet access required.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4",
    bestRating: "5",
    ratingCount: "1"
  }
};
