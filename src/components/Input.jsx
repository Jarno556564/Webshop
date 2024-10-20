function Input({ input_name, label_text, input_type, input_placeholder, input_styling }) {
    return (
        <>
            <div className={input_styling}>
                <label for={input_name} class="form-label">{label_text}</label>
                <input type={input_type} class="form-control" placeholder={input_placeholder} id={input_name} />
            </div>
        </>
    );
}

export default Input;
