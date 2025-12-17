import React, { useState } from "react";
import { Card, Input, Button, message } from "antd";
import {
  ArrowLeftOutlined,
  FileTextOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { addLesson } from "../../api/api";

const { TextArea } = Input;

const AddLesson = () => {
  const navigate = useNavigate();
  const { id: courseId } = useParams();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    content: "",
    duration: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddLesson = async () => {
    if (!form.title.trim() || !form.content.trim()) {
      message.warning("Title and content are required");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        title: form.title.trim(),
        content: form.content.trim(),          // ✅ REQUIRED
        duration: form.duration
          ? Number(form.duration)
          : undefined,                          // ✅ optional
      };

      await addLesson(courseId, payload);

      message.success("✅ Lesson added successfully");
      navigate(-1);
    } catch (error) {
      message.error(
        error?.response?.data?.message || "Failed to add lesson"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-50 p-6 pt-10">
      <Card
        className="w-full max-w-2xl rounded-3xl shadow-2xl border-0"
        bodyStyle={{ padding: "32px" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Add New Lesson
            </h1>
            <p className="text-sm text-gray-500">
              Instructor / Admin only
            </p>
          </div>

          <Button
            icon={<ArrowLeftOutlined />}
            type="text"
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </div>

        {/* Form */}
        <div className="space-y-5">
          {/* Lesson Title */}
          <Input
            size="large"
            name="title"
            prefix={<FileTextOutlined />}
            placeholder="Lesson Title"
            value={form.title}
            onChange={handleChange}
            className="rounded-xl"
          />

          {/* Lesson Content (REQUIRED) */}
          <TextArea
            rows={5}
            name="content"
            placeholder="Lesson Content"
            value={form.content}
            onChange={handleChange}
            className="rounded-xl"
          />

          {/* Duration (optional) */}
          <Input
            size="large"
            name="duration"
            type="number"
            placeholder="Duration (in minutes)"
            value={form.duration}
            onChange={handleChange}
            className="rounded-xl"
          />

          {/* Submit */}
          <Button
            type="primary"
            size="large"
            icon={<PlusOutlined />}
            loading={loading}
            onClick={handleAddLesson}
            className="w-full h-12 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-lg font-semibold"
          >
            Add Lesson
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default AddLesson;