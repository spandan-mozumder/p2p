import React from 'react';

const USPHome = () => {
  return (
    <div className="h-full px-20 py-5">
      <h1
        className="gradient-text p-5 text-4xl"
        style={{ textShadow: '1px 1px 2px var(--colour-4)' }}
      >
        But why should you choose Us?
      </h1>

      <div className="flex h-70 flex-row">
        <div className="absolute w-[50%]">
          <p>
            Affordable Access: Low-cost learning opportunities make education
            accessible without the high fees associated with traditional
            tutoring or professional teaching services.
          </p>
          <p>
            Learning Formats: Offer a mix of prerecorded videos, live group
            sessions, and one-on-one mentoring to cater to different learning
            styles and schedules.
          </p>
          <p>
            Expertise: Focus on niche areas or practical skills, providing
            targeted learning that might not be available in standard
            curriculums.
          </p>
          <p>
            Customized Learning Paths: Empower users to tailor their educational
            journey through a variety of course formats and interaction levels,
            enhancing personalization.
          </p>
          <p>
            Real-Time Feedback: Live sessions enable immediate interaction,
            while prerecorded materials can be supplemented with discussion
            boards and Q&A sessions for continuous support.
          </p>
        </div>
        <div className="absolute right-20 w-[50%]">
          <p>
            Diverse Educator Pool: Leverage the expertise of skilled
            professionals who might not be traditional teachers but bring
            real-world experience and passion to their subjects.
          </p>
          <p>
            Community-Driven Learning: Create a collaborative environment where
            learners can engage with educators and peers, fostering an
            interactive and supportive community.
          </p>
          <p>
            Scalability and Convenience: A cloud-based SaaS model allows
            learners to access content anytime, anywhere, and educators to scale
            their sessions easily.
          </p>
          <p>
            Cost-Effective Educator Engagement: Allow educators to monetize
            their expertise without the overhead of formal teaching
            institutions, encouraging more professionals to join.
          </p>
          <p>
            User-Centric Platform: Focus on a seamless, intuitive user
            experience that prioritizes the needs of both learners and
            educators, backed by reliable customer support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default USPHome;
