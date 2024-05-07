export const changeTheme = (theme = "green-hacker") => {

  if(
    theme == "switch"
  ){
    theme = document.body.style.getPropertyValue("--primary-color") == "#3A86FF" ? "green-hacker" : "blue-hacker";
  }
  if (theme == "green-hacker") {
    document.body.style.setProperty("--primary-color", "#4CAF50");
    document.body.style.setProperty("--secondary-color", "#333333");
    document.body.style.setProperty("--tertiary-color", "#1A1A1A");
    document.body.style.setProperty("--primary-text", "#CCCCCC");
    document.body.style.setProperty("--secondary-text", "#999999");
    document.body.style.setProperty("--tertiary-text", "#666666");
    document.body.style.setProperty("--primary-bg", "#000000");
    document.body.style.setProperty("--secondary-bg", "#1A1A1A");
    document.body.style.setProperty("--tertiary-bg", "#333333");
    document.body.style.setProperty("--primary-button", "#007ACC");
    document.body.style.setProperty("--secondary-button", "#FF5E5E");
    document.body.style.setProperty("--tertiary-button", "#FFD700");
  } else {
    document.body.style.setProperty("--primary-color", "#3A86FF");
    document.body.style.setProperty("--secondary-color", "#1E1E1E");
    document.body.style.setProperty("--tertiary-color", "#2C2C2C");
    document.body.style.setProperty("--primary-text", "#FFFFFF");
    document.body.style.setProperty("--secondary-text", "#B0B0B0");
    document.body.style.setProperty("--tertiary-text", "#808080");
    document.body.style.setProperty("--primary-bg", "#000000");
    document.body.style.setProperty("--secondary-bg", "#1E1E1E");
    document.body.style.setProperty("--tertiary-bg", "#2C2C2C");
    document.body.style.setProperty("--primary-button", "#00C2FF");
    document.body.style.setProperty("--secondary-button", "#FF5E5E");
    document.body.style.setProperty("--tertiary-button", "#00FF00");
  }
  return theme;
};
