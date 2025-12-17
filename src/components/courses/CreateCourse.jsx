import React, { useState } from "react";
import { Card, Input, Button, Select, Switch, message } from "antd";
import {
  BookOutlined,
  FileTextOutlined,
  ArrowLeftOutlined,
  PlusOutlined,
  DollarOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { createCourse } from "../../api/api";

const { TextArea } = Input;
const { Option } = Select;

const CreateCourse = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    level: "",
    price: "",
    thumbnail: "",
    
  });
  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleCreateCourse = async () => {
  if (!form.title || !form.description) {
    message.warning("Please fill required fields");
    return;
  }

  try {
    setLoading(true);

    // 🔥 SEND ONLY BACKEND-EXPECTED FIELDS
    const payload = {
      title: form.title,
      description: form.description,
      price: Number(form.price) || 0,
      category:form.category,
      level:form.level,
      courseImageUrl:form.thumbnail || undefined
    };
    if(form.thumbnail){
    payload.courseImageUrl=form.thumbnail
  }

    await createCourse(payload);

    message.success("🎉 Course created successfully");
    navigate("/admin_dashboard/courses");
  } catch (error) {
    message.error(
      error?.response?.data?.message ||
        "Invalid data sent to server"
    );
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <Card
        className="w-full max-w-2xl rounded-3xl shadow-2xl border-0"
        bodyStyle={{ padding: "32px" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Create New Course
            </h1>
            <p className="text-sm text-gray-500">
              Admin / Instructor only
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
          {/* Title */}
          <Input
            size="large"
            name="title"
            prefix={<BookOutlined />}
            placeholder="Course Title"
            value={form.title}
            onChange={handleChange}
            className="rounded-xl"
          />

          {/* Description */}
          <TextArea
            rows={4}
            name="description"
            prefix={<FileTextOutlined />}
            placeholder="Course Description"
            value={form.description}
            onChange={handleChange}
            className="rounded-xl"
          />

          {/* Category */}
          <Input
            size="large"
            name="category"
            prefix={<AppstoreOutlined />}
            placeholder="Category (e.g. Web Development)"
            value={form.category}
            onChange={handleChange}
            className="rounded-xl"
          />

          {/* Level */}
          <Select
            size="large"
            placeholder="Select Course Level"
            value={form.level || undefined}
            onChange={(value) =>
              setForm({ ...form, level: value })
            }
            className="w-full rounded-xl"
          >
            <Option value="Beginner">Beginner</Option>
            <Option value="Intermediate">Intermediate</Option>
            <Option value="Advanced">Advanced</Option>
          </Select>

          {/* Price */}
          <Input
            size="large"
            name="price"
            type="number"
            prefix={<DollarOutlined />}
            placeholder="Price (0 for free)"
            value={form.price}
            onChange={handleChange}
            className="rounded-xl"
          />

          {/* Thumbnail */}
          <Input
            size="large"
            name="thumbnail"
            placeholder="Thumbnail Image URL"
            value={form.thumbnail}
            onChange={handleChange}
            className="rounded-xl"
          />

          {/* Submit */}
          <Button
            type="primary"
            size="large"
            icon={<PlusOutlined />}
            loading={loading}
            onClick={handleCreateCourse}
            className="w-full h-12 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-lg font-semibold"
          >
            Create Course
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CreateCourse;