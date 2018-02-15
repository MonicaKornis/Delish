export const createRating = (rating) => {
  return (
    $.ajax({
      method: 'POST',
      url: `api/ratings`,
      data: {rating: rating}
    })
  );
};

export const updateRating = (rating) => {
  return(
    $.ajax({
      method: 'PATCH',
      url: `api/ratings/${rating.id}`,
      data: {rating: rating}
    })
  );
};

export const deleteRating = (ratingId) => {
  return(
    $.ajax({
      method: 'DELETE',
      url: `api/ratings/${ratingId}`
    })
  );
};
