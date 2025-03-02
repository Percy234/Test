import { useEffect, useState } from "react";

const PageViewCounter = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const storedViews = localStorage.getItem("page_views");
    const newViews = storedViews ? parseInt(storedViews) + 1 : 1;
    localStorage.setItem("page_views", newViews);
    setViews(newViews);
  }, []);

  return (
    <div className="page-view-counter">
      <p className=""><i class="bi bi-eye"></i>{views}</p>
    </div>
  );
};

export default PageViewCounter;
