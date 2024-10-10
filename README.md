## Authentication Flow for Rofabs

In this project, we've implemented a basic authentication system using Next.js with cookie-based session management. This flow ensures users are authenticated and able to access protected routes once they log in successfully.

### 1. **Login Component (`/components/UserAuthForm.js`)**

- **Purpose**: The login component allows users to input their credentials (email and password) and submit them to the backend for authentication.
- **How it Works**:
  - On form submission, the credentials are sent via a `POST` request to the authentication endpoint (`${process.env.NEXT_PUBLIC_API_URL}/login`).
  - If authentication is successful, a token (JWT) is returned in the response, which is then stored in cookies.
  - The user is notified of success or failure using the `useToast` hook for feedback.

### 2. **Storing Token in Cookies**

- **Why Cookies?**: 
  Cookies are used to store the JWT token because it allows us to maintain user sessions on the client-side. The token is stored securely for subsequent API requests and route protection.
  
- **How it’s Stored**: 
  Upon a successful login, we store the JWT token in the cookies using the `js-cookie` package. Cookies are set with a 7-day expiry to allow users to stay logged in unless they explicitly log out or the cookie expires.
  
  - **Code Path**: 
    After login, the cookie is set inside the `handleLogin` function in `UserAuthForm.js`.

### 3. **Protected Routes (Middleware - `/middleware.js`)**

- **Purpose**: Middleware is responsible for protecting certain routes by verifying whether the user is authenticated. It ensures that only users with a valid token can access sensitive or restricted areas like the dashboard.
  
- **How It Works**:
  - The middleware checks for the presence of a JWT token in the cookies.
  - If the token is missing or invalid, the user is redirected to the login page.
  - If the token is present, the request proceeds to the next stage, allowing access to the protected route.
  
  - **Code Path**: The middleware is located in `/middleware.js` and is applied to specific paths, such as `/dashboard`.

### 4. **Token Validation and API Requests**

- **Using the Token**: 
  When making further API requests from protected pages, we retrieve the token from cookies and include it in the request headers as a Bearer token for authentication. This ensures that the backend knows which user is making the request.

- **File References**:
  - To access and use the token in a component, import `Cookies` from `js-cookie`, retrieve the token, and include it in API requests. For example, this could be done in any component that interacts with protected APIs.

### 5. **Logout and Token Removal**

- **Purpose**: When a user logs out, the token needs to be removed from the cookies to ensure the session ends, and the user no longer has access to protected routes.
  
- **Implementation**:
  - Upon logout, we remove the cookie containing the token using `js-cookie`. After this, the user is typically redirected back to the login page.
  
  - **Code Path**: This can be implemented in the logout functionality, typically found in a navigation bar or account settings page.

### 6. **Redirect on Authentication Failure**

- **How it Works**: 
  If the user tries to access a protected route (e.g., `/dashboard`) without being logged in, the middleware automatically redirects them to the login page.
  
  - **Code Path**: This logic is part of the middleware in `/middleware.js`.

### Summary of Authentication Workflow:

1. **Login**: User inputs email and password → Form submission triggers API call → On success, token is stored in cookies.
2. **Protected Routes**: Middleware checks for token in cookies → Allows access if token is valid, otherwise redirects to login.
3. **API Requests**: When fetching protected resources, include the token from cookies in the headers for authentication.
4. **Logout**: Clear the token from cookies on user logout to end the session.

This system provides secure session management while ensuring ease of use with cookie-based authentication.