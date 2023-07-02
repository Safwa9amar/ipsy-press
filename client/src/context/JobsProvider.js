import React, { createContext, useEffect, useState } from "react";
import { API_URL } from "@env";
import axios from "axios";
import fetchApi from "../helpers/fetchApi";

// Create the context
export const JobsContext = createContext([]);

// Create a provider component
export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      name: "Développeur web",
      description: "Développeur web",
      createdAt: "2021-05-30T15:00:00.000Z",
      updatedAt: "2021-05-30T15:00:00.000Z",
    },
  ]);
  useEffect(() => {
    fetchApi("/JobsProvider")
    const data = axios
      .get(`${API_URL}jobs`)
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => console.log(err));
  }, [API_URL]);

  return (
    <JobsContext.Provider value={jobs}>{children}</JobsContext.Provider>
  );
};
