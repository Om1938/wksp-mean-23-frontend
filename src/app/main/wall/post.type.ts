export type Post = {
  _id: string;
  content: string;
  author: {
    _id: string;
    username: string;
  };
  title: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Comment = {
  _id: string;
  content: string;
  author: {
    _id: string;
    username: string;
  };
  createdAt: Date;
  updatedAt: Date;
};
