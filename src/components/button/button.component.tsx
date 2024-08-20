import './button.styles.scss';
  
export const BUTTON_TYPE_CLASSES:any = {
  google: "google-sign-in",
  inverted: "inverted",
};

export default function Button({ children, buttonType, onClick, ...otherProps }: { children: any, buttonType?: any, onClick?: () => void }) {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};
