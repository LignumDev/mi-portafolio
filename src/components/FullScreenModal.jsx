import { Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const FullScreenModal = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        boxSizing: "border-box",
        backgroundColor: "rgba(0,0,0,0.96)",
        zIndex: 1300,
        display: "flex",
        flexDirection: "column",
        paddingY: 0,
        overflowY: "auto",
        animation: "fadeInModal 1.0s ease",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            zIndex: 1400,
            backgroundColor: "rgba(255,255,255,0.1)",
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.3)",
            },
          }}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
      </Box>

      <Box
        sx={{ flex: 1, color: "white", fontSize: { xs: "0.9rem", sm: "1rem" } }}
      >
        {children}
      </Box>
    </Box>
  );
};
