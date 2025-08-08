// import React, { useState } from "react";
// import { noteSchema, NoteSchema } from "../../validators/note-schema";
// import { createNoteAPI } from "../../service/note-service";

// type CreateNoteFormProps = {
//     onCreated?: () => void; // callback to notify parent on successful creation
// };

// export const CreateNoteForm: React.FC<CreateNoteFormProps> = ({ onCreated }) => {
//     const [formData, setFormData] = useState<NoteSchema>({
//         note_title: "",
//         note_content: "",
//     });
//     const [errors, setErrors] = useState<Partial<Record<keyof NoteSchema, string>>>({});
//     const [successMsg, setSuccessMsg] = useState<string>("");

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//         setErrors({}); // clear errors on change
//         setSuccessMsg("");
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();

//         const result = noteSchema.safeParse(formData);

//         if (!result.success) {
//             const fieldErrors: Partial<Record<keyof NoteSchema, string>> = {};
//             for (const err of result.error.errors) {
//                 if (err.path.length > 0) {
//                     fieldErrors[err.path[0] as keyof NoteSchema] = err.message;
//                 }
//             }
//             setErrors(fieldErrors);
//             return;
//         }

//         try {
//             await createNoteAPI(formData);
//             setSuccessMsg("Note created successfully!");
//             setFormData({ note_title: "", note_content: "" });
//             if (onCreated) onCreated();
//         } catch (err) {
//             setErrors({ note_title: "Failed to create note. Try again." });
//         }
//     };

//     return (
//         <form
//             onSubmit={handleSubmit}
//             style={{
//                 maxWidth: 400,
//                 margin: "0 auto",
//                 padding: 24,
//                 backgroundColor: "#fff",
//                 borderRadius: 8,
//                 boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//                 boxSizing: "border-box",
//             }}
//         >
//             <div style={{ marginBottom: 16 }}>
//                 <label
//                     htmlFor="note_title"
//                     style={{ display: "block", fontWeight: "bold", marginBottom: 6 }}
//                 >
//                     Title *
//                 </label>
//                 <input
//                     type="text"
//                     id="note_title"
//                     name="note_title"
//                     value={formData.note_title}
//                     onChange={handleChange}
//                     style={{
//                         width: "100%",
//                         padding: "8px 12px",
//                         borderRadius: 4,
//                         border: errors.note_title ? "2px solid red" : "1px solid #ccc",
//                         outline: "none",
//                         fontSize: 16,
//                         boxSizing: "border-box",
//                     }}
//                 />
//                 {errors.note_title && (
//                     <p style={{ color: "red", marginTop: 6 }}>{errors.note_title}</p>
//                 )}
//             </div>

//             <div style={{ marginBottom: 16 }}>
//                 <label
//                     htmlFor="note_content"
//                     style={{ display: "block", fontWeight: "bold", marginBottom: 6 }}
//                 >
//                     Content
//                 </label>
//                 <textarea
//                     id="note_content"
//                     name="note_content"
//                     value={formData.note_content}
//                     onChange={handleChange}
//                     rows={4}
//                     style={{
//                         width: "100%",
//                         padding: "8px 12px",
//                         borderRadius: 4,
//                         border: errors.note_content ? "2px solid red" : "1px solid #ccc",
//                         outline: "none",
//                         fontSize: 16,
//                         boxSizing: "border-box",
//                         resize: "vertical",
//                     }}
//                 />
//                 {errors.note_content && (
//                     <p style={{ color: "red", marginTop: 6 }}>{errors.note_content}</p>
//                 )}
//             </div>

//             <button
//                 type="submit"
//                 style={{
//                     padding: "10px 20px",
//                     cursor: "pointer",
//                     borderRadius: 4,
//                     border: "none",
//                     backgroundColor: "#007bff",
//                     color: "white",
//                     fontWeight: "bold",
//                     fontSize: 16,
//                     width: "100%",
//                 }}
//             >
//                 Create Note
//             </button>

//             {successMsg && (
//                 <p style={{ color: "green", marginTop: 16, textAlign: "center" }}>
//                     {successMsg}
//                 </p>
//             )}
//         </form>
//     );
// };

import React, { useEffect, useState } from "react";
import { noteSchema, NoteSchema } from "../../validators/note-schema";
import { createNoteAPI, updateNoteAPI } from "../../service/note-service";

type CreateNoteFormProps = {
    onCreated?: () => void;  // for create success callback
    onUpdated?: () => void;  // for update success callback
    initialData?: NoteSchema;
    noteId?: number;         // note id for update
};

export const CreateNoteForm: React.FC<CreateNoteFormProps> = ({
    onCreated,
    onUpdated,
    initialData,
    noteId,
}) => {
    const [formData, setFormData] = useState<NoteSchema>({
        note_title: "",
        note_content: "",
    });

    const [errors, setErrors] = useState<Partial<Record<keyof NoteSchema, string>>>({});
    const [successMsg, setSuccessMsg] = useState<string>("");

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
            setErrors({});
            setSuccessMsg("");
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setErrors({});
        setSuccessMsg("");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = noteSchema.safeParse(formData);

        if (!result.success) {
            const fieldErrors: Partial<Record<keyof NoteSchema, string>> = {};
            for (const err of result.error.errors) {
                if (err.path.length > 0) {
                    fieldErrors[err.path[0] as keyof NoteSchema] = err.message;
                }
            }
            setErrors(fieldErrors);
            return;
        }

        try {
            if (noteId) {
                // Edit mode - update
                await updateNoteAPI(noteId, formData);
                setSuccessMsg("Note updated successfully!");
                if (onUpdated) onUpdated();
            } else {
                // Create mode
                await createNoteAPI(formData);
                setSuccessMsg("Note created successfully!");
                setFormData({ note_title: "", note_content: "" });
                if (onCreated) onCreated();
            }
        } catch (err) {
            setErrors({ note_title: "Failed to save note. Try again." });
        }
    };


    return (
        <form
            onSubmit={handleSubmit}
            style={{
                maxWidth: 400,
                margin: "0 auto",
                padding: 24,
                backgroundColor: "#fff",
                borderRadius: 8,
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                boxSizing: "border-box",
            }}
        >
            <div style={{ marginBottom: 16 }}>
                <label
                    htmlFor="note_title"
                    style={{ display: "block", fontWeight: "bold", marginBottom: 6 }}
                >
                    Title *
                </label>
                <input
                    type="text"
                    id="note_title"
                    name="note_title"
                    value={formData.note_title}
                    onChange={handleChange}
                    style={{
                        width: "100%",
                        padding: "8px 12px",
                        borderRadius: 4,
                        border: errors.note_title ? "2px solid red" : "1px solid #ccc",
                        outline: "none",
                        fontSize: 16,
                        boxSizing: "border-box",
                    }}
                />
                {errors.note_title && <p style={{ color: "red", marginTop: 6 }}>{errors.note_title}</p>}
            </div>

            <div style={{ marginBottom: 16 }}>
                <label
                    htmlFor="note_content"
                    style={{ display: "block", fontWeight: "bold", marginBottom: 6 }}
                >
                    Content
                </label>
                <textarea
                    id="note_content"
                    name="note_content"
                    value={formData.note_content}
                    onChange={handleChange}
                    rows={4}
                    style={{
                        width: "100%",
                        padding: "8px 12px",
                        borderRadius: 4,
                        border: errors.note_content ? "2px solid red" : "1px solid #ccc",
                        outline: "none",
                        fontSize: 16,
                        boxSizing: "border-box",
                        resize: "vertical",
                    }}
                />
                {errors.note_content && (
                    <p style={{ color: "red", marginTop: 6 }}>{errors.note_content}</p>
                )}
            </div>

            <button
                type="submit"
                style={{
                    padding: "10px 20px",
                    cursor: "pointer",
                    borderRadius: 4,
                    border: "none",
                    backgroundColor: "#007bff",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 16,
                    width: "100%",
                }}
            >
                {noteId ? "Update Note" : "Create Note"}
            </button>

            {successMsg && (
                <p style={{ color: "green", marginTop: 16, textAlign: "center" }}>{successMsg}</p>
            )}
        </form>
    );
};

