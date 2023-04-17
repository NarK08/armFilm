function Footer() {
  return (
    <footer className="page-footer green lighten-4">
      <div className="footer-copyright">
        <div className="green-text container">
          © {new Date().getFullYear()} Copyright Text
          <a className="green-text  right" href="#!">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
