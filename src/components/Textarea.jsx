function Textarea({ textarea_name, label_text, textarea_placeholder, textarea_styling }) {
    return (
        <>
            <div className={textarea_styling}>
                <label for={textarea_name}>{label_text}</label>
                <textarea class="form-control" placeholder={textarea_placeholder} id={textarea_name} />
            </div>
        </>
    );
}

export default Textarea;
