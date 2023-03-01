import { Button } from "@pankod/refine-mui";
import { CustomButtonProps } from "interfaces/common";

function CustomButton({
  type,
  title,
  backgroundColor,
  color,
  fullWidth,
  icon,
  disabled,
  handleClick,
}: CustomButtonProps) {
  return (
    <Button
      disabled={disabled}
      type={type === "submit" ? "submit" : "button"}
      onClick={handleClick}
      sx={{
        flex: fullWidth ? 1 : "unset",
        padding: "10px 15px",
        width: fullWidth ? "100%" : "fit-content",
        minWidth: 130,
        backgroundColor,
        color,
        fontSize: 16,
        gap: "10px",
        fontWeight: 600,
        textTransform: "capitalize",
        "&:hover": { opacity: 0.9, backgroundColor },
      }}
    >
      {icon}
      {title}
    </Button>
  );
}

export default CustomButton;
