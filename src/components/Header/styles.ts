import { act } from '@testing-library/react';
import styled from 'styled-components';

export const Container = styled.div`
  background: #c72828;
  padding: 30px 30px;

  header {
    width: 100%;
    margin: 0 auto;
    padding: 0 0 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      display: flex;
      justify-content: space-between;
      width: 100%;
      div {
        button {
          font-weight: 600;
          border-radius: 8px;
          border: 0;
          background: #39b100;
          color: #fff;

          display: flex;
          flex-direction: row;
          align-items: center;

          .text {
            padding: 16px 24px;
          }

          .icon {
            display: flex;
            padding: 16px 16px;
            background: #41c900;
            border-radius: 0 8px 8px 0;
            margin: 0 auto;
          }
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    header {
      height:
      align-items: center;
      justify-content: center;
      flex-direction: column;
      nav {
        display: flex;
        height: 200px;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          button {
          width: 100%;
          .icon {
            width: 60px;
          }
        }
      }
      }
    }
  }
`;
