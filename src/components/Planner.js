


import React, { useEffect, useState } from "react";
import API from "../services/api";

function Planner() {
  const [plans, setPlans] = useState([]);
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [expandedSections, setExpandedSections] = useState({});

  // Fetch planner tasks for logged-in user
  useEffect(() => {
    const fetchPlans = async () => {
      try {
      const res = await API.get("/study-plans");
      setPlans(res.data);
    } catch (err) {
      console.error(err);
    }
      setPlans(res.data);
    };
    fetchPlans();
  }, []);

  // Create task
  const handleCreatePlan = async () => {
    if (!task || !dueDate) return;

    try {
      const res = await API.post("/study-plans", {
        topic: task,
        examDate: dueDate
      });
      setPlans([res.data, ...plans]);
      setTask("");
      setDueDate("");
    } catch (err) {
      console.error(err);
      alert("Failed to create task");
      return;
    }

    setPlans([res.data, ...plans]);
    setTask("");
    setDueDate("");
  };

  // Delete task
  const deletePlan = async (id) => {
    try {
      await API.delete(`/study-plans/${id}`);
      setPlans(plans.filter((plan) => plan._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete task");
    }
  };

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Study Planner</h1>

        {/* Input Section */}
        <div style={styles.inputBox}>
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a task..."
            style={styles.input}
          />

          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            style={styles.input}
          />

          <button onClick={handleCreatePlan} style={styles.addBtn}>
            Add Task
          </button>
        </div>

        {/* Planner List */}
        {plans.length === 0 ? (
          <p style={styles.empty}>No tasks yet.</p>
        ) : (
          plans.map((plan) => (
            <div key={plan._id} style={styles.card}>
              <div style={styles.cardHeader}>
                <h3 style={styles.taskTitle}>{plan.topic}</h3>
                <button
                  onClick={() => deletePlan(plan._id)}
                  style={styles.deleteBtn}
                >
                  Delete
                </button>
              </div>

              <p style={styles.date}>
                Due: {plan.examDate.split("T")[0]}
              </p>

              <button
                onClick={() => toggleSection(plan._id)}
                style={styles.toggleBtn}
              >
                {expandedSections[plan._id] ? "Hide Details" : "Show Details"}
              </button>

              {expandedSections[plan._id] && (
                <div style={styles.details}>
                  <p>
                    Break this task into smaller steps and complete it before
                    the deadline.
                  </p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Planner;

/* ===================== INLINE CSS ===================== */

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f5f1e8",
    padding: "40px",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto"
  },
  heading: {
    fontSize: "36px",
    fontWeight: "700",
    color: "#1e3a5f",
    marginBottom: "30px"
  },
  inputBox: {
    backgroundColor: "white",
    border: "3px solid #1e3a5f",
    borderRadius: "12px",
    padding: "30px",
    marginBottom: "40px",
    display: "flex",
    gap: "15px",
    flexWrap: "wrap"
  },
  input: {
    padding: "14px 18px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "2px solid #1e3a5f",
    outline: "none",
    flex: "1"
  },
  addBtn: {
    padding: "14px 30px",
    fontSize: "16px",
    fontWeight: "600",
    backgroundColor: "#9cb4a8",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  },
  empty: {
    color: "#6b7280",
    textAlign: "center"
  },
  card: {
    backgroundColor: "white",
    border: "3px solid #1e3a5f",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "20px"
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  taskTitle: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#1e3a5f",
    margin: 0
  },
  date: {
    color: "#6b7280",
    marginTop: "10px"
  },
  toggleBtn: {
    marginTop: "10px",
    background: "transparent",
    border: "none",
    color: "#1e3a5f",
    fontWeight: "600",
    cursor: "pointer"
  },
  deleteBtn: {
    backgroundColor: "white",
    border: "2px solid #1e3a5f",
    color: "#1e3a5f",
    padding: "8px 14px",
    borderRadius: "6px",
    cursor: "pointer"
  },
  details: {
    marginTop: "15px",
    backgroundColor: "#f9fafb",
    padding: "15px",
    borderRadius: "8px",
    color: "#6b7280"
  }
};
