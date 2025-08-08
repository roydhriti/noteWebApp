import { useEffect, useState } from "react";
import { deleteNoteAPI, fetchNotesAPI } from "../service/note-service";
import { CreateNoteForm } from "../components/form/NoteForm";

export const NotePage = () => {
    const [notes, setNotes] = useState<any[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [editingNote, setEditingNote] = useState<any | null>(null);

    const loadNotes = () => {
        fetchNotesAPI()
            .then((data) => {
                setNotes(data.note || []);
            })
            .catch(() => {
                setNotes([]);
            });
    };

    useEffect(() => {
        loadNotes();
    }, []);

    const closeForm = () => {
        setShowForm(false);
        setEditingNote(null);
    };

    const openEditForm = (note: any) => {
        setEditingNote(note);
        setShowForm(true);
    };

    const handleDelete = (note_id: number) => {
        if (window.confirm("Are you sure you want to delete this note?")) {
            deleteNoteAPI(note_id)
                .then(() => {
                    loadNotes();
                })
                .catch(() => {
                    alert("Failed to delete note.");
                });
        }
    };

    const modalOverlayStyle: React.CSSProperties = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
    };

    const modalContentStyle: React.CSSProperties = {
        backgroundColor: "white",
        padding: 24,
        borderRadius: 8,
        maxWidth: 500,
        width: "90%",
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        position: "relative",
    };


    return (
        <div style={{ maxWidth: 900, margin: "1rem auto" }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 20,
                }}
            >
                <h2>Notes</h2>

                <button
                    onClick={() => setShowForm((prev) => !prev)}
                    style={{
                        padding: "8px 16px",
                        cursor: "pointer",
                        borderRadius: 4,
                        border: "1px solid #007bff",
                        backgroundColor: "#007bff",
                        color: "white",
                    }}
                >
                    {showForm ? "Cancel" : "Create Note"}
                </button>
            </div>

            {showForm && (
                <div style={modalOverlayStyle} onClick={() => setShowForm(false)}>
                    <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setShowForm(false)}
                            style={{
                                position: "absolute",
                                top: 8,
                                right: 8,
                                border: "none",
                                background: "transparent",
                                fontSize: 24,
                                cursor: "pointer",
                                lineHeight: 1,
                            }}
                            aria-label="Close modal"
                        >
                            &times;
                        </button>

                        <CreateNoteForm
                            initialData={editingNote ? {
                                note_title: editingNote.note_title,
                                note_content: editingNote.note_content,
                            } : undefined}
                            noteId={editingNote?.id}
                            onCreated={() => {
                                closeForm();
                                loadNotes();
                            }}
                            onUpdated={() => {
                                closeForm();
                                loadNotes();
                            }}
                        />
                    </div>
                </div>
            )}


            <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                {notes.length === 0 && <p>No notes found</p>}
                {notes.map((note: any, idx: number) => (
                    <div
                        key={idx}
                        style={{
                            border: "1px solid #ccc",
                            borderRadius: 8,
                            padding: 16,
                            width: 250,
                            backgroundColor: "#fafafa",
                            position: "relative",
                        }}
                    >
                        <h3>{note.note_title}</h3>
                        <p>{note.note_content || "No content"}</p>

                        <button
                            onClick={() => openEditForm(note)}
                            style={{
                                position: "absolute",
                                bottom: 16,
                                right: 16,
                                padding: "4px 8px",
                                cursor: "pointer",
                                borderRadius: 4,
                                border: "1px solid #28a745",
                                backgroundColor: "#28a745",
                                color: "white",
                                fontSize: 12,
                            }}
                        >
                            Edit
                        </button>

                        <button
                            onClick={() => handleDelete(note.note_id)}
                            style={{
                                position: "absolute",
                                bottom: 16,
                                right: 16,
                                padding: "4px 8px",
                                cursor: "pointer",
                                borderRadius: 4,
                                border: "1px solid #dc3545",
                                backgroundColor: "#dc3545",
                                color: "white",
                                fontSize: 12,
                            }}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>

    );
};
