
// Custom Mouse Pointer Animation
const cursor = document.createElement("div");
cursor.style.width = "15px";
cursor.style.height = "15px";
cursor.style.position = "absolute";
cursor.style.borderRadius = "50%";
cursor.style.backgroundColor = "rgba(147, 221, 28, 0.8)";
cursor.style.pointerEvents = "none";
cursor.style.zIndex = "1000";
cursor.style.transform = "translate(-50%, -50%)";
cursor.style.transition = "transform 0.2s ease, opacity 0.2s ease";

document.body.appendChild(cursor);

// Update the cursor's position
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

  
  // Add ripple effect on clicks
  document.addEventListener("click", () => {
    cursor.style.transform = "scale(2)";
    cursor.style.opacity = "0.5";
    setTimeout(() => {
      cursor.style.transform = "scale(1)";
      cursor.style.opacity = "1";
    }, 300);
  });