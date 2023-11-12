import { ButtonContainer, GalletyButton } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return (
    <ButtonContainer>
      <GalletyButton onClick={onLoadMore} type="button">
        Load More
      </GalletyButton>
    </ButtonContainer>
  );
};
