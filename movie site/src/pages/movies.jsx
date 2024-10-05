// import {MOVIES} from "../src/movies.js";
// import Card from "../../components/card.jsx";

// import * as S from './movies.style.js'
// import {useEffect, useState} from "react";
// import axios from "axios";

// const MoviesPage = () => {
//     const [movies, setMovies] = useState([])
    
//     useEffect(() => {
//         const getMovies = async () => {
//             const movies = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
//                 headers: {
//                     Authorization: `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmQxNTQwYzYxZTIwMjk5MmIzY2Q1NTY0ZWEzMmVlZSIsIm5iZiI6MTcyODExODE4Ni4yNDU4MTYsInN1YiI6IjY3MDBmNTliMTU5MmVmMWJhOTg1NDZlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sPXnVQO2N98Qi3eLp9hGDiJjA6sGZtj5qyYrFL77PGk`,
//                 }
//             })
//             setMovies(movies);
//         }
//         getMovies()
//     }, []);
    
//     return (
//         <S.CardList>
//             {movies.data?.results.map((movie) => (
//                 <Card key={movie.id} movie={movie}/>
//             ))}
//         </S.CardList>
//     )
// };


import styled from 'styled-components';

const MoviesPage = () => {
    return (
        <>
            <StyledContent>카테고리</StyledContent>
            <CategoryContainer>
                <CategoryCard>
                    <CategoryImage src="data:image/jpeg;base64,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" alt="현재 상영중인" />
                    <CategoryLabel>현재 상영중인</CategoryLabel>
                </CategoryCard>
                <CategoryCard>
                    <CategoryImage src="data:image/jpeg;base64,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" alt="인기있는" />
                    <CategoryLabel>인기있는</CategoryLabel>
                </CategoryCard>
                <CategoryCard>
                    <CategoryImage src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUVFRUWFxUXFRUVFRUWGBUVFRUYHSggGB0lHRUWITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lHyUtLS0wLS4vLS0vLS8tLS0tLTUrLS0tLS0vLS0tLS0tLSstLS0tLS0tLSs1LSstLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA/EAABAwIEAwYEBAQDCQEAAAABAAIRAyEEEjFBBVFhBhMicYGRMqGxwRRC0fBiguHxByNSMzRDU1RjcpKiFf/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAtEQACAgEDAgMHBQEAAAAAAAAAAQIDEQQSITFREzJBImFxgZGhsQUUQvDx4f/aAAwDAQACEQMRAD8A8OQhCAEIQgBCEIAQkQgBCEIAQhCAEspEIATgkSIAQhKgBCRKAgFa2VIUgQoLCSmlBQEIBLCWEBAACcEBqXKUJCEuVKB1TXNKgkcm5k0IDSUIBpToTm00jghIsoTAVKAgGSmlPcFGSgI0IQrFAQhCAEiEIAQhCAEIQgBCEIASolEoBEIQgBKkQgFCkYExoU9JkqGShpH6f0SObFv7BTl5B8LiOUWOm0LQwPAy8BzzAN8sXI68leqqdjxFGdtsK1mTMylhnP8AgaT9PUp1fBVWCXNIHOx9yNF2NGg1gDWgABPIXpL9OW3mXJ5r/Unu4jwcGpGNC6vFcKpPuRB5i391lYjhJY438P5HS25v4S2ZmAT+wuDUUTp83Tuehp9RC7y9exmlBWjV4Y8XykgCSQD6+ypVKa5lJPodLTRClBhLlSAKSBhA6pQlcEikDsyIBTUAqALkSiyMyQqQNc5NIT3BMhARIQhWKAhCEAiEIQAhCEAIQhACUBInIBEiVCARCVSNpz90BHCUNUppojYKMk4EYyVucK7P4rEsmjRcWb1SCGakWcdbgi06LR7G9kzinZnksoBwDnXmof8AQyBbq7010924EylSoBuUNY2QxtsrWg2A3MDX1WsKm1ua4MZ2pPanyeT0OxTaTW1G5i8tuXGZO8CLfWFRewgwdQvXeINc5jiYgTltAFtQd15NiGnMc2smV7Gl6NJYPF1fVNshQnQkhdZyCItuAfMSlSFQ4prDLRk4vKFoMY2k9ji58gxmNmwM1ojdpjqQFzdelnYagLA1oADQb2IGmpPi1NzHLTpAY+nuq54MzM17DEkG0fECCQW76hfO63Sftpb4+V/b++h9FodX+4WyXmX3ObbTJE7aT1THU1s4/Cd3VnxwSC6R+Ym4B63j9lQ1sIQMwAMlwtcRH5fK36WXGrE+TucGjHcE0BXX4VxbIv8AX9+fXqm1MAR+ZnuPP9Ffcim1lKEEKw3DOvDSQLTBhMLFbJGCFIJTwEoahAkSm5U6mpXU0BQQhCuUBIlKRACEIQAhCVACEoS5UA2E5wTmNuFOaHMHpsoJKsJ7adpVjuwNQR57q3h+G1616VCo9swHNY4tnlmFgnL4Q4XLKDKXT1Tm25Lad2TxxH+7ujzZ9MymwvYfGv1Y1g5ve36Nkq6psf8AF/Qzd9a/kvqc89w0XT9muzRqgVaoimfhF8zhznYH3W9wrsBTYWurPzkGcoEMPQzcj2XUnDgCAIAsByXZp9Jzmz6HDqdbxit/MawsHdtZTazIQBk8LS21o0C3Mfi8OwDuwXHXLJytgwTrc6+6wspCMpK9BwTwcCsfJ09bilKsGtzQwRmBnMTBtbZYvaLg+GqNz4doDo+JpMdBGl/ko8Vwx1Ngf9xHtqoKTXvcXNcG2ibT6Sfos4VqPtRZpOxy9mSOTr4ZzTDhB6qItXWVsRTLclZmaNCNZ5yufq0xNl2Rk31RwWJQ6MolqSFaNNNNNWKKZXyq7w67gw3BOkkCd/cWUIYp6J8TTYQRyG6w1NKtqlB+q/w302odVsZruSYtr+8LH0pbANM2LcpzCzRq4AuiYFjpCwsQHNY9uV4vNrAEADLA5AHbQAldpxzCkBr2utIBgeINEgkmLgaxfTcrIx0S4kSRJgNiwkcgAT9CJvZfC12YfQ+6lHJznE6DiQAIaGtcGgGJINzbXX0HmquJ70icpi08i5sNnzkdbytbiHE6rIDGtgkQ8tMy2DPSCD81m4zEvLg9zzmA5EyPiloFgDz110hdUMvHBhLBPkeO6Pw+J2ZkZQ3cnMb6DToqONwJnLADgHOcZmRbxDcjkP1Wxw/EsdVa4DK05pDWk5QTBBOuYgC/VbHFcGXkvBbTDQHA2FosAxupkk3OvlaPE2ywydmUcY/grwwO0nQGx0nr+qo1KDm6tIXd0+EViGlzmtzADMXEWEgk2EXM3PQc1FXwlFpyGr3mxIb4RJOrnG/mFK1PzI8E4MN/f3UlNphbeM4fTJJpyGiReLnp62jos6rgngxH768lurFIycGjEQEIK6DACkQhACEJUAIQlCEj2BW8Dw6rXf3dGm6o+Jhokgbk8hcXKk4JQpVKzGV6vdUyfE+CSB6AwSdzYTK987O8EwuHpN/DNblcAe8EOdUsPEX7z0staavEfUxuu8NdOTzfhP8AhbWcA6vWbTnVrBncOhdIAPlK6LBf4Z4NhBf3lSJkOcA023DANPNd8Kad3a7VVXH0OCV1j9TAwHAMPQ/2VCmw6SGjMR1dqVd/DrRNNMLFop46GDWepmvoKB1Jab2KA01dSKNFE0kx1JaPdJO5Ubyu0ynUVGaJC2W4WTEj1smvwTuXrt7qVaiNjMauHO+Ik+agqUI3nyn7q9xKvToAuqOAj3PkN1y3/wC7Ue+BkYwlwYRJJj4C4mwBIiI3WV2tqoXtP5I1q0lt3lXzZp1KCgfhVp4Q94xrogkCWn8p/M0+RkeilOHXYrOMnFKHOGYDsIozhSuhOGTDhVPjGfhHP/hik7grp6QaG5TSY7qdfcK9wijTzd4WhuQyAL3O5JVXqMLOC8NMpNJSOdfjS2m0E+EC+xJAs2ZkXI0+W9Wlg2uGaCZdMZjYT4Wi/WPX2tdpqTDUOUeEudMbB1p63MxpdT0mCXuMABoLZgXGUnMPORbTXkvhb47Jyx3Z95RLdCLfZHK8WoNeMofDAbwIILjrY8tf7rnRT8LhfNIBcSZyPgNyTaDBsOl7BXu0DnAz8R+KwAGUO3Gpi1zsPUx9mSKlU06hmWSw/wCk8rc5EcoXVDMa9xnLEp4NLhtLu6WX4YLmncfFLr/zDe0DRadLibKZDnFuebWJytIAPSTLT6rPxdMsOUizfCdSNibdRCxsSH1DUYACIDs52HQ8/ht6rFQ3vLZo3tWETdpe0P4ipmDnCmYhpgCBoOp3k7kqphaFatAo0idhDbA7kudafNXOEYLDhoJb3j5u50mI1GWI+XqujrY14czuwC5okwS1obNp1sLdVpK1R9mK+pRQb9qTMXhfZWtVcRUfly3IbJdrcZjYG+0rssH2Sw+UZ6tUnq4Tp0CqNxRY0hgBLjMsmevpfXfLFk+uw1DJziwFqmQact7k3XJbZZN9cI2jCMfQ8ZSJUi948oEIQgFQgJUJEShIlaEBMyw81scF7TYnCOHcVXNaDJpm9Jx6s+4grGJhRgqE2nlCSTWGe5dgu3hxtU4evTayrlLmFk5HhvxNgkkHfyBXfimvl/h+NqUajK1I5X03BzT1Gx6ESCNwSvp/guMbiMPSrtECrTa8A6jMASPTRdMLm1ycN1Ki8roIaaY6mrzqajdTV1I5nEw+MNqCmRS+M2bpPMxNpgGJXE9mca7CYl+HxL3APLQ3M4vAqE2M6jMHD1AXfcZqNYG5omS8fyDb3C8f4xi+9e4vgy4kmxB9d9AuC3UyWpwn0SPS0+mjLT8rqz16i5jpDXNdlMOgg5TyMaFS9yvJuy/EHUcVSFMhuepSpuECHU31GhwM+cg8wvZ+6XZC/esnDfpvDeDPNFPaXCwdAVw01V4jLWOy3eQQwc3kQ3yExJ2CtK2MYuUuiMYVScko9WeT9sMaTWqNdJBeWgwIaxhLZAB1Ja432+WHTxBdFNrcskEEXPhkx6mFu9qeH92Q6q6GZWucGzmzw1hABGk3k7HmoOF4FtTDvrNIZ42saXa2bmdAA6jdeErYyj4jXV5+bPo407fYXobvZXGtLCHENGaWkmASQM7ZdvmzOj+JdNTpyJF+q5bs3hWHvgcpbSLWObGYOc9p8Tb6SwnSfv0HDcbSp1cPQpuDg/vmHMR4alODkAjmSL9F36X9TeVROPuT/GfkedrP0tNO6D97X5wXO4SHDLbdSaBEH5fWFD+Fk20XpeIePKlmOcOlptLSCNlrVMHG91A+grRsyUdcos5PjDv80E6zMnQRlubX1+QTqlIFsuGWCCREgkA3dIiPi97qevdz3kaPIaeUQ2eoMLP4riQym4fHY9Gtm/iEmY+cBfK6qalfLb3f5PstJBqiO7svwcpxuoC/JI1hgaLRlB1NzuL8gstmSlUz02m0mBaINr7XA9upCY3FF9dz4k3NzZo39DOg5qrxDEkOIBF/ij5id911QraxH3Gcprqdjhcc3FU3uEB7BD2iJMNs5oPy/mUXF8IKY76nqA0Ou3QwM1hfQ+64vA4t9J4qUzBHsRuDGoXZ4B/4ymA2qKLWZQ+kxsPMfCA+YawwNBfKZ6YWUuqWV5f7/UaQs3rD6mZw+BVqNaDkc3PGkGwMW3B+S3qIJGgzNJgkatA0M+ZPoVBiuHsDi5rQzMNi4EwZFiYGknRSMxHi0Idpl2idQNL2KTxNZQWY9SZoAl1QuDZnKObRaY5RpeSfaN/ESIltW4nw92Be+jgefNLUrNYS9xLiJIsLk+HOMxk68t1z7sU2T/kvfcmQLeIyQJnnzVYV7hKeDiUIQvZPOBCEqAEoSBOYoJQOCGpyaCgFeU1CRAWKTl7J2CqvdgKU4iq2M7WNbVeAA2o4AQHeH2XizSut7M9t62EpCk2hQqU2knxtOeXGfjB+oToRJblg9Qq1qoM/iauUHQYipmjbwxM9FYZinEeGvVJ5d9WteNcpnULneBf4h4SsctfDNoHZ1nsnqcoLfPTqutONoQC0MIIBGVogg3BmIVnOK6s51TLPCOT4icpqf5dV/eXfUfWEOABAEOZJ8vJZww1N0ZqJAjXvRPsGeS2uO4AVr06hbMyJdEEWgDRc2/se/bEH/wClipUKT4XxOrwbnFcv4F6jh6bX+Gk4mQQ4VYhw3aMlrxfotkcRxJnx4j1r1dfYSubwXZN7KjHmtmDXNdEETlIMa9F27uIu2aPf+iur6V2RnLTXPuzMbxHG86uv/UVfrKe/F4sgltR0wbOfWcT5OzW9FePEHch7/wBE08QPUFUsvplFrKfuf+E16W1Sy017+DleKMoOaG4mpUda4NSpBv06/ZVKNHABjgypXDdYDiWZoANyJ0CvcV4K2u6XvdERAA5yqtHs3TY0tD35SZI8OunJZx1Edq4R0PTyz1f1DA0sJLzT78mR3mWqxovMSC0XseW6mOAwmcAPAcXnKMxc7vAdM0TOhU3D+HU6OctzHvMuad8sxYD+Iqw97ZbIHhJLTuCdSCo/ce15Vj7lv2y29XktNw2IiPxVfX4u9qF2uwzAfLdXabKwiKzybXdUrH5d8As5mLHP5n9VO3F9UnrkuiZnHQr1wWGipEur1SZN++qtETplD/RVMQahIy16gvoK1U/UlSGsN4+SbnBmCLCdYHL7rJ69qL4+/wDw0WhjlZ/A/H1CWk6BsewE/Ky5DtZi3RkBgFu2pAAsd79V0eNxpa0TMxPS5uYC4Li1fxOe4zOk89hG5j6Lg0sMyydt8ltIKYZSphxJJM9BpIBHL+iy3Pm51KfisTnsNNbxr+yoWsK9aEccs8+T7Dy6brZ4VQqUiK9wAPh/1THhPJU/wmQNzDxETA94PK397qxXqltNoOjgLk3DovA1iw/ZUT5WEWiscs6OtUbfJoRqNQTJNtjca2ETdQ0cUS/u7uJjK/KROUE3PmAJHILneFVqgeHAmHTTNz42nMAY5i0eS6JlMnLeCSC2CTEGZ3jQiJuuWcFDg1i3LkmNBsBxIeYDHO0zRMAAyQJMxpaFVFTLIBAv/wBrfX4utvRaVRzfyiSTfNtDTp+9CpaVem0RmgagW09lzeI+xfaeUoQhe4eeCEIQChKEiEJHMQQkCc/moAiQoQUAicCmpwUgnpOXV9le1bsNFKoC+je2rmSdW8x/D7deMaVOyospwUlhmkJuLyj3WjUZUaHscHNcJBGhSFq8t7N9rKmFBYW95TJnLMEHctO3lC7zgvaGjih4CQ4CSx2oGkzoR5LzbaZQ+B312xl8TUhBCa545pvejmsDUflTS0KN1YKF9ZATlgTCwc1XdUQHKcsglc3yUZakLhzTSORTcxgHMB2Hsq1XCjaR5KVxP7lRue5WUn3IaQmGqBlnNDh/EL+hTsbigAO6YGu/Nu1w+s/qon1T+wq73/uCtNzaw+hm4rOTPxmMrE6bjR2w6FYGN4U97pGn8R/T7LqHv8lG6OitW1X5UUlHd1OapdnH6940ehP3V7CcIcwyXzA0gifO+i0nMHIJpb5+hWjtk+rKqtIo18ET+YDmY8R0iCTYeEeyiPDmmC8lxG4gDUnSDzWg8+fzUZCrvY2orMwVMGwd0MzHkLK9TxDWgNaz4Y8zGuuhP2VdwsdjzubeUppA5uUN7upK46F/8UwAWO1zczNyduqkbiR+RtONfE28nXeyzM3VKHdfkEUUTuOIQhC9Q88EIQgFQkSoAUkWTAE9qgkYhKUkIBEIKApIFQCkQgJWuV/hXEKlB4fTN9OhB1B6LMBTw9Vccl1LB6TwrtEyvaCx4uWkyD/4ndaff9V5K2oRBBIIuNiCIuCu87O8SNWlLiC5tjzMAEE31XFbp0uUddd2eGb+feUd4AqwqSmufdcjib7iy6sNLpwqeapF5mw+qfn6qHEncWH1P3ZIah5/VU31hP7+yfnt/dNg3FgvSOeq3eJn4lo1t5yFGxjcTuqdR7pC4HcfJVH8SpDWo0fzA/dQO43RH5/YFXVc/RFXOPqy8T+7KNwWY/j9PbMfT+qrv7Qt2YT5kBXVFnYo7YdzVc0cvmFGWDl81jP7QO/5Y/8AY/ooX8dqH8rfmVotPYUd0DdNLzUbqfUrAdxmrzA8h+qhdxSsfzn0ACutNPuijvgdC6n1+SYWdQucfjKh1e73Khc8nUk+a0WmfqyrvXY6RzmjVzfdRHFU/wDWz3XOpFdaddyjufYqIQhdBiCEIQAlCRCAcQnMKYE4KCRzx+/umJ5KZKAQoCUpFJAIRCEAJQkShAPAWx2ZxbadRwcYDmRodQQRp6rGVrBDxeQVWs8F08cnaUuLURq4+zv0SVeNUdRm9lzRcmys3RFl/GkdC7tA2ZFMk9SAq9TtC46MaPOSsUpsIqK16EO6b9TSHF6o0IHkB90x/Fqx/wCIfSB9AqMJFfw49im+XcsPxlQ6vcfUqFzkxISrJJdCMtjpTSUkpCVJAspCUkpJQASkSSklAKUhKSUIAlIUJCEASkQiEBWSIQgBCEIBUiEIBQlCEIBQUhQhCRChCEIAlCEIASoQhKHgK3w4XNvX7IQoQZaqFMQhSQCEiEAqQoQgESFCEAiahCACmoQgESIQgEQUIQAhCEAiEqEB/9k=" alt="높은 평가를 받은" />
                    <CategoryLabel>높은 평가를 받은</CategoryLabel>
                </CategoryCard>
                <CategoryCard>
                    <CategoryImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQISz5JFUCVDQfnLLaipMbHiX2s4J1FCFyNKg&s" alt="개봉 예정중인" />
                    <CategoryLabel>개봉 예정중인</CategoryLabel>
                </CategoryCard>
            </CategoryContainer>
        </>
    );
};

export default MoviesPage;

const StyledContent = styled.h1`
    color: white;
    margin-top: 5px;
`;

const CategoryContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const CategoryCard = styled.div`
  background-color: #333;
  width: 300px;
  height: 120px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CategoryLabel = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
`;