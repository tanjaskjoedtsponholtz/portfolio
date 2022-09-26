import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";
animate(
  " h1",
  { opacity: [0, 1] },
  {
    delay: stagger(0.5, { start: 1 }),
  }
);
