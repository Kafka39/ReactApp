import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";

import HomePage from "../HomePage";
import About from "../About";
import NotFound from "../NotFound";

export default function MainPage() {
  return (
    <Container sx={{marginTop: '20px'}}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}
