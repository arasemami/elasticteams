"use client";
import React, { useEffect, useState } from "react";
import PostsList from "@/app/components/postsList";

const fetchPosts = async (token: string) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", token);

  const requestOptions: RequestInit = {
    method: 'GET',
    headers
  };

  const response = await fetch(`${process.env.BASE_URL}/api/posts/getAll`, requestOptions);
  const result = await response.json();

  return result.data;
};

const Posts = () => {
  const [items, setItems] = useState([]);
  const token = localStorage.getItem('token') || '';

  useEffect(() => {
    fetchPosts(token).then(setItems);
  }, [token]);

  return (
    <main className=" overflow-hidden">
      <PostsList items={items} />
    </main>
  );
};

export default Posts;