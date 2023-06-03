function Footer(props) {
  return (
    <footer className={`footer ${props.theme ? "night" : "day"}`}>
      Kusumakar Tanwar | kusumakar.tanwar@gmail.com | +91 - 9530256910
    </footer>
  );
}

export default Footer;
