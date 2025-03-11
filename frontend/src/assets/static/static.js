const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const otpRegex = /\b\d{6}\b/;
const staticData = {
   passwordRegex,
   emailRegex,
   otpRegex
}

export default staticData;