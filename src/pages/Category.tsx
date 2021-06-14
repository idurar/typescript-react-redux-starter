import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { images } from "../redux/images/actions";
import Image from "../components/Image";
import {
  selectImageList,
  selectNextPage,
  selectImage,
} from "../redux/images/selectors";
import { DefaultLayout } from "../layout";
import Loading from "../components/Loading";

type imageProps = {
  id: string;
  url: string;
};

type ListProps = {
  list: any[];
};
const ImagesList: React.FC<ListProps> = ({ list }) => {
  return (
    <>
      {list.map((item: imageProps, index) => (
        <Image key={index} src={item.url} />
      ))}
    </>
  );
};

const Category: React.FC = () => {
  interface ParamTypes {
    id: string;
  }
  const { id } = useParams<ParamTypes>();
  const { isLoading } = useSelector(selectImage);
  const list = useSelector(selectImageList);
  const nextPage = useSelector(selectNextPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(images.resetState());
    dispatch(images.search("images", id, 0));
  }, [id]);

  const loadMore = () => {
    dispatch(images.search("images", id, nextPage));
  };

  return (
    <DefaultLayout>
      {isLoading && (
        <div style={{ position: "relative", marginBottom: "50px" }}>
          <Loading></Loading>
        </div>
      )}
      <ImagesList list={list} />
      <button onClick={loadMore}>Load More</button>
    </DefaultLayout>
  );
};
export default Category;
