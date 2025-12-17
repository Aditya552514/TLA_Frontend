import React, { useEffect, useState } from "react";
import { Card, Input, Button, Select, Switch, message, Spin } from "antd";
import {
  BookOutlined,
  FileTextOutlined,
  ArrowLeftOutlined,
  SaveOutlined,
  DollarOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { getCourseById, updateCourse } from "../../api/api";

const { TextArea } = Input;
const { Option } = Select;

const UpdateCourse = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();

  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    level: "",
    price: "",
    thumbnail: "",
    isPublished: false,
  });

  /* ================= FETCH COURSE ================= */
  useEffect(() => {
    fetchCourse();
    // eslint-disable-next-line
  }, []);

  const fetchCourse = async () => {
    try {
      const res = await getCourseById(courseId);
      const course = res.data.course;

      setForm({
        title: course.title || "",
        description: course.description || "",
        category: course.category || "",
        level: course.level || "",
        price: course.price || "",
        thumbnail: course.thumbnail || "",
      });
    } catch {
      message.error("Failed to load course");
      navigate(-1);
    } finally {
      setPageLoading(false);
    }
  };

  /* ================= UPDATE ================= */
  const handleUpdateCourse = async () => {
    if (!form.title || !form.description) {
      message.warning("Please fill required fields");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        title: form.title,
        description: form.description,
        category: form.category,
        level: form.level,
        price: Number(form.price) || 0,
        thumbnail: form.thumbnail,
      };

      await updateCourse(courseId, payload);

      message.success("✅ Course updated successfully");
      navigate("/admin_dashboard/courses");
    } catch (error) {
      message.error(
        error?.response?.data?.message || "Update failed"
      );
    } finally {
      setLoading(false);
    }
  };

  if (pageLoading) {
    return (
        <div className="flex justify-center items-center h-64">
                <Spin size="large" />
        </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <Card className="w-full max-w-2xl rounded-3xl shadow-2xl border-0">
        {/* Header */}
        <div className="flex justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Update Course</h1>
            <p className="text-sm text-gray-500">
              Admin / Instructor only
            </p>
          </div>
          <Button icon={<ArrowLeftOutlined />} onClick={() => navigate(-1)}>
            Back
          </Button>
        </div>

        {/* Form */}
        <div className="space-y-5">
          <Input
            size="large"
            name="title"
            prefix={<BookOutlined />}
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
            placeholder="Course Title"
          />

          <TextArea
            rows={4}
            name="description"
            prefix={<FileTextOutlined />}
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            placeholder="Course Description"
          />

          <Input
            size="large"
            name="category"
            prefix={<AppstoreOutlined />}
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
            placeholder="Category"
          />

          <Select
            size="large"
            value={form.level || undefined}
            onChange={(value) =>
              setForm({ ...form, level: value })
            }
            className="w-full"
            placeholder="Select level"
          >
            <Option value="beginner">Beginner</Option>
            <Option value="intermediate">Intermediate</Option>
            <Option value="advanced">Advanced</Option>
          </Select>

          <Input
            size="large"
            type="number"
            prefix={<DollarOutlined />}
            value={form.price}
            onChange={(e) =>
              setForm({ ...form, price: e.target.value })
            }
            placeholder="Price"
          />

          <Input
            size="large"
            value={form.thumbnail}
            onChange={(e) =>
              setForm({ ...form, thumbnail: e.target.value })
            }
            placeholder="Thumbnail URL"
          />

          <Button
            type="primary"
            size="large"
            icon={<SaveOutlined />}
            loading={loading}
            onClick={handleUpdateCourse}
            className="w-full"
          >
            Update Course
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default UpdateCourse;
