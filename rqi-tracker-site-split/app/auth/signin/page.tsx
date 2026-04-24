export default function SignInPage() {
  return (
    <div style={{ maxWidth: 420, margin: "60px auto", padding: "0 16px" }}>
      <h1 style={{ fontSize: 22, marginBottom: 14 }}>Đăng nhập</h1>
      <form method="post" action="/api/auth/callback/credentials">
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
          style={{ width: "100%", padding: 10, marginBottom: 16 }}
        />
        <button type="submit" style={{ width: "100%", padding: 10 }}>
          Đăng nhập
        </button>
      </form>
      <div style={{ marginTop: 12, fontSize: 14 }}>
        Chưa có tài khoản? <a href="/auth/signup">Tạo tài khoản</a>
      </div>
    </div>
  );
}

