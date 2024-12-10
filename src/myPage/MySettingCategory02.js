
import { useState } from "react";
import "../css/MySettingCss.css";

function MySettingCategory02({ prof }) {
    const [editingField, setEditingField] = useState(null);
    const [editedProf, setEditedProf] = useState({ ...prof[0] });

    const handleSave = (field) => {
        setEditingField(null);
    };

    const handleChange = (field, value) => {
        setEditedProf((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <div className="profContainer">

            <div className="profBox">
                <p className="prof">프로필사진</p>
                <div>
                    {editingField !== "photo" && (
                        <button
                            className="my_btn"
                            onClick={() => setEditingField("photo")}
                        >
                            변경
                        </button>
                    )}
                    {editingField === "photo" && (
                        <div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) =>
                                    handleChange("photo", e.target.files[0])
                                }
                            />
                            <button className="my_btn" onClick={() => handleSave("photo")}>
                                저장
                            </button>
                            <button className="my_btn" onClick={() => setEditingField(null)}>
                                취소
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="profBox">
                <div>
                    <p className="prof">이름</p>
                    {editingField === "name" ? (
                        <input
                            type="text"
                            value={editedProf.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                        />
                    ) : (
                        <div>{editedProf.name}</div>
                    )}
                </div>
                <div>
                    <button
                        className="my_btn"
                        onClick={() =>
                            editingField === "name"
                                ? handleSave("name")
                                : setEditingField("name")
                        }
                    >
                        {editingField === "name" ? "저장" : "변경"}
                    </button>
                    {editingField === "name" && (
                        <button className="my_btn" onClick={() => setEditingField(null)}>취소</button>
                    )}
                </div>
            </div>

            <div className="profBox">
                <div>
                    <p className="prof">사용자이름(url)</p>
                    {editingField === "url" ? (
                        <input
                            type="text"
                            value={editedProf.url}
                            onChange={(e) => handleChange("url", e.target.value)}
                        />
                    ) : (
                        <span>{editedProf.url}</span>
                    )}
                </div>
                <div>
                    <button
                        className="my_btn"
                        onClick={() =>
                            editingField === "url"
                                ? handleSave("url")
                                : setEditingField("url")
                        }
                    >
                        {editingField === "url" ? "저장" : "변경"}
                    </button>
                    {editingField === "url" && (
                        <button className="my_btn" onClick={() => setEditingField(null)}>취소</button>
                    )}
                </div>
            </div>

            <div className="profBox">
                <div>
                    <p className="prof">소개</p>
                    {editingField === "introduction" ? (
                        <textarea
                            value={editedProf.introduction}
                            onChange={(e) =>
                                handleChange("introduction", e.target.value)
                            }
                        />
                    ) : (
                        <span>{editedProf.introduction}</span>
                    )}
                </div>
                <div>
                    <button
                        className="my_btn"
                        onClick={() =>
                            editingField === "introduction"
                                ? handleSave("introduction")
                                : setEditingField("introduction")
                        }
                    >
                        {editingField === "introduction" ? "저장" : "변경"}
                    </button>
                    {editingField === "introduction" && (
                        <button className="my_btn" onClick={() => setEditingField(null)}>취소</button>
                    )}
                </div>
            </div>

            <div className="profBox">
                <p className="prof">프라이버시</p>
                <div>
                    <input
                        type="checkbox"
                        checked={editedProf.isPrivate || false}
                        onChange={(e) =>
                            handleChange("isPrivate", e.target.checked)
                        }
                    />
                    후원한 프로젝트 목록을 공개합니다.
                </div>
            </div>
        </div>
    );
}

export default MySettingCategory02;
