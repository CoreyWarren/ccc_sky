import React, { useState } from "react";

const InteractiveTabs = () => {
  const [activeTab, setActiveTab] = useState(null); // Tracks the active tab
  const [isTabVisible, setIsTabVisible] = useState(false); // Controls tab visibility

  const sections = [
    {
      section: "Counseling Services",
      items: [
        {
          title: "Substance Abuse Counseling",
          icon: "bi bi-heart",
          content: "Guiding individuals toward recovery with tools for lasting change.",
          extraInfo: `
            <h6>Core Techniques:</h6>
            <ul>
              <li><strong>Motivational Interviewing (MI):</strong> Encourages self-reflection and builds intrinsic motivation for change.</li>
              <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Recognizes and changes negative thought patterns contributing to substance use.</li>
              <li><strong>Dialectical Behavior Therapy (DBT):</strong> Helps manage intense emotions and reduce harmful behaviors.</li>
              <li><strong>Trauma-Informed Therapy:</strong> Addresses the impact of past trauma on substance use.</li>
              <li><strong>Relapse Prevention Therapy (RPT):</strong> Teaches strategies to maintain long-term recovery.</li>
              <li><strong>Psychoeducation:</strong> Provides clients and families with knowledge about addiction and recovery.</li>
              <li><strong>Contingency Management (CM):</strong> Uses positive reinforcement to encourage abstinence.</li>
              <li><strong>12-Step Facilitation Therapy:</strong> Encourages active participation in community-based 12-step programs.</li>
              <li><strong>Strengths-Based Therapy:</strong> Focuses on personal achievements and capabilities for recovery.</li>
              <li><strong>Mindfulness-Based Approaches:</strong> Promotes emotional regulation and stress reduction through mindfulness techniques.</li>
            </ul>
          `,
        },
        {
          title: "Individual Therapy",
          icon: "bi bi-person",
          content: "Personalized support for emotional healing and personal growth.",
          extraInfo: `
            <h6>Therapeutic Approaches:</h6>
            <ul>
              <li><strong>Trauma-Informed Therapy:</strong> Provides a safe space for processing traumatic experiences.</li>
              <li><strong>Solution-Focused Brief Therapy (SFBT):</strong> Focuses on actionable steps for current challenges.</li>
              <li><strong>Person-Centered Therapy:</strong> Empowers clients with unconditional positive regard and empathy.</li>
              <li><strong>Psychodynamic Therapy:</strong> Explores how past experiences influence current behaviors.</li>
              <li><strong>Mindfulness-Based Therapy:</strong> Focuses on present-moment awareness and emotional regulation.</li>
              <li><strong>Strengths-Based Therapy:</strong> Builds self-confidence by focusing on strengths and resources.</li>
            </ul>
            <h6>What to Expect:</h6>
            <ul>
              <li>Personalized Treatment Plans tailored to your unique needs.</li>
              <li>Confidential, nonjudgmental support.</li>
              <li>Collaborative exploration of challenges and solutions.</li>
            </ul>
          `,
        },
        {
          title: "Couples & Family Therapy",
          icon: "bi bi-people",
          content: "Strengthening relationships and fostering healthy communication.",
          extraInfo: `
            <h6>Therapeutic Techniques:</h6>
            <ul>
              <li><strong>Emotionally Focused Therapy (EFT):</strong> Improves emotional connection and resolves conflicts.</li>
              <li><strong>Gottman Method Couples Therapy:</strong> Builds stronger relationships through trust and effective communication.</li>
              <li><strong>Structural Family Therapy:</strong> Adjusts family structures for healthier dynamics.</li>
              <li><strong>Narrative Therapy:</strong> Helps reframe life stories to create positive change.</li>
              <li><strong>Solution-Focused Brief Therapy (SFBT):</strong> Finds actionable solutions to family or couple challenges.</li>
              <li><strong>Family Systems Therapy:</strong> Examines and improves the interconnected family system.</li>
              <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Identifies and challenges unhelpful thought patterns.</li>
              <li><strong>Imago Relationship Therapy:</strong> Heals relational wounds by understanding each other's triggers.</li>
            </ul>
          `,
        },
      ],
    },
    {
      section: "Education Services",
      items: [
        {
          title: "Staff Training",
          icon: "bi bi-people",
          content: "Workshops on effective communication, crisis intervention, and best practices for recovery support.",
          extraInfo: `
            <h6>Workshops Include:</h6>
            <ul>
              <li>Communication strategies for empathetic engagement.</li>
              <li>Effective crisis intervention techniques.</li>
              <li>Building supportive environments for recovery.</li>
            </ul>
          `,
        },
        {
          title: "Crisis Prevention",
          icon: "bi bi-exclamation-triangle",
          content: "Training to identify early warning signs of crises and ensure safety.",
          extraInfo: `
            <h6>Focus Areas:</h6>
            <ul>
              <li>Recognizing early signs of distress.</li>
              <li>Implementing preventive measures.</li>
              <li>Ensuring physical and emotional safety during crises.</li>
            </ul>
          `,
        },
      ],
    },
    {
      section: "Treatments & Meetings",
      items: [
        {
          title: "Medication Education",
          icon: "bi bi-capsule",
          content: "Understand recovery medications, their benefits, and proper usage.",
          extraInfo: `
            <h6>Topics Covered:</h6>
            <ul>
              <li>Medication-Assisted Treatment (MAT) options.</li>
              <li>Benefits and potential side effects of recovery medications.</li>
              <li>Proper medication usage for effective recovery.</li>
            </ul>
          `,
        },
        {
          title: "NA/AA Meetings",
          icon: "bi bi-people",
          content: "Join peer-led support groups for encouragement and connection.",
          extraInfo: `
            <h6>Meeting Details:</h6>
            <ul>
              <li>Schedules for in-person and online meetings.</li>
              <li>Supportive environment to share experiences.</li>
              <li>Guidance from peers on recovery journeys.</li>
            </ul>
          `,
        },
        {
          title: "SMART Recovery Meetings",
          icon: "bi bi-lightbulb",
          content: "Focus on self-management, coping strategies, and long-term success.",
          extraInfo: `
            <h6>Key Features:</h6>
            <ul>
              <li>Building motivation for change.</li>
              <li>Developing effective coping strategies.</li>
              <li>Creating actionable plans for long-term success.</li>
              <br></br>
              <a href="https://www.smartrecovery.org/meeting">Learn more about SMART Recovery.</a>
            </ul>
          `,
        },
        {
          title: "Multilingual Meetings",
          icon: "bi bi-translate",
          content: "Access support in your preferred language for inclusivity and comfort.",
          extraInfo: `
            <h6>Languages Offered:</h6>
            <ul>
              <li>English, Spanish, and other commonly spoken languages.</li>
              <li>Culturally inclusive support tailored to your needs.</li>
            </ul>
          `,
        },
        {
          title: "Overdose Prevention",
          icon: "bi bi-droplet-fill",
          content: "Recognize symptoms and intervene effectively to save lives.",
          extraInfo: `
            <h6>Key Training Areas:</h6>
            <ul>
              <li>Recognizing early signs of overdose.</li>
              <li>Administering naloxone effectively.</li>
              <li>Developing proactive safety strategies.</li>
            </ul>
          `,
        },
      ],
    },
  ];

  const handleCardClick = (item) => {
    setActiveTab(item); // Set the clicked card's details as the active tab
    setIsTabVisible(true); // Make the tab visible
  };

  const closeTab = () => {
    setIsTabVisible(false); // Hide the tab
    setActiveTab(null); // Clear active tab
  };

  return (
    <div>
      {/* Sections */}
      {sections.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          className="py-5"
          style={{
            backgroundColor: sectionIndex % 2 === 0 ? "#ffffff" : "#f8f9fa", // Alternating background colors
          }}
          id="learn_more"
        >
          <div className="container">
            <h2 className="text-center fw-bold mb-4">{section.section}</h2>
            <div className="row g-4">
              {section.items.map((item, index) => (
                <div
                  key={index}
                  className="col-md-6 col-lg-4"
                  onClick={() => handleCardClick(item)}
                >
                  <div className="card shadow-sm border-0">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <i className={`${item.icon} text-primary fs-3 me-3`}></i>
                        <h5 className="card-title mb-0 fw-bold">{item.title}</h5>
                      </div>
                      <p className="card-text">{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Overlay */}
      {isTabVisible && <div className="overlay" onClick={closeTab}></div>}

      {/* Floating Tab */}
      {isTabVisible && activeTab && (
        <div className="floating-tab bg-light shadow-lg border rounded p-4">
          <button
            className="btn-close float-end"
            onClick={closeTab}
            aria-label="Close"
          ></button>
          <h5 className="fw-bold text-primary">{activeTab.title}</h5>
          <div dangerouslySetInnerHTML={{ __html: activeTab.extraInfo }}></div>
        </div>
      )}
    </div>
  );
};

export default InteractiveTabs;
