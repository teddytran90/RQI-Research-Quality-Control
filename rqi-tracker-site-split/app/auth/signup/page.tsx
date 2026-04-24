export default function SignUpPage() {
  return (
    <div style={{ maxWidth: 420, margin: "60px auto", padding: "0 16px" }}>
      <h1 style={{ fontSize: 22, marginBottom: 14 }}>Tạo tài khoản</h1>
      <form method="post" action="/api/auth/signup">
        <label style={{ display: "block", marginBottom: 6 }}>Email</label>
        <input
          name="email"
          type="email"
          required
          style={{ width: "100%", padding: 10, marginBottom: 12 }}
        />
        <label style={{ display: "block", marginBottom: 6 }}>Mật khẩu</label>
        <input
          name="password"
          type="password"
          required
          minLength={8}
          style={{ width: "100%", padding: 10, marginBottom: 12 }}
        />
        <label style={{ display: "block", marginBottom: 6 }}>Tên workspace (team)</label>
        <input
          name="workspaceName"
          type="text"
          required
          placeholder="VD: RQI Team"
          style={{ width: "100%", padding: 10, marginBottom: 16 }}
        />
        <button type="submit" style={{ width: "100%", padding: 10 }}>
          Tạo tài khoản
        </button>
      </form>
      <div style={{ marginTop: 12, fontSize: 14 }}>
        Đã có tài khoản? <a href="/auth/signin">Đăng nhập</a>
      </div>
    </div>
  );
}

