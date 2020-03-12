import React, { Component } from 'react';
import axios from "axios";
const api = axios.create({
    base_url: "htpp://localhost:8080/api"
})
export default api