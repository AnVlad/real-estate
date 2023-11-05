import {
  Box,
  Container,
  IconButton,
  ImageListItem,
  Typography,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HomeDesigns = () => {
  const images: { src: string; text: string }[] = [
    {
      src: 'https://s3-alpha-sig.figma.com/img/6603/1d64/f07c5a3e737291418972d0123a3074de?Expires=1699833600&Signature=bBTGr1eVOMnD-12xs38cv8PMNCcSU20MLky79WWLAivUWHdG2MrlSC93skmqnOxSNxh~GW4olxbIQXaTnbSKa9KG9MCHYZBjYHMgvFvoX4lC9qbokryw5ApNWNGvg1R~~6FChP~C9L7cvCs22v~lFMUo0-qlm4uajTrarY3~5LnrJlN-kqmqME4s8m5cP4HyVB67VbiV3Er-UH5-EAH2K4x9WtM5vsWJ1IsmmxiaygDkyfRrpmRZUgBCjD1IvhPj3WKKc-cH6XItVd0PpokApYKefvHdOpBUKiDxmxvknjC86OhtRntduZuu5iU0~IbmxJS6ZV0Vlp8zZOzj16chkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      text: 'DISCOVER INTERIORS',
    },
    {
      src: 'https://s3-alpha-sig.figma.com/img/98da/bd17/334fd8903cdacece3eeaa70dafde70e3?Expires=1699833600&Signature=Sxse4TBIZgL1OJJEHaJ5dAdoO5EAEq50j5coDTHKpr-1OHE3lE0zOzDUt2E8u3wQEYpVd~bz84TadliKqYfTCn3VEubuj4m2q1UpU~Ty54PUhFUW9coEbwxDycCsfVv4qfr89k4vGWVhUVY8P3z7BZQZA~eFPMLhW5LjgdOT7ay6rRenNoIb0qzxfFx8MktQeH-EM8TnsoC6C0zrRlPkktQHH7ZvhTjqQ1H1oBOK76keeWep4PQUnCl~RKFXpi7zsjKhZXWUI-a~tM6JvUDo24Z8AXOnTZk5NSxoinS6MfbSnmWBPAZW~bYr4WVaqcL0PutUXNk3SY328SkpjGbprw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      text: 'BEDROOM SELECTIONS',
    },
  ];

  return (
    <Container sx={{ paddingBottom: '150px' }}>
      <Box display={'flex'} justifyContent={'end'}>
        <Typography
          variant='body1'
          width={'400px'}
          sx={{ textTransform: 'uppercase' }}>
          Our properties feature the latest technology, innovative design, and
          eco-friendly features. Experience the home of tomorrow, today.
        </Typography>
      </Box>
      <Box paddingY={'170px'}>
        <Typography variant='h2' textAlign={'end'} marginRight={'57px'}>
          BALLANCE
        </Typography>
        <Typography variant='h2' sx={{ transform: 'translateY(-10px)' }}>
          PERFECT
        </Typography>

        <Box display={'flex'} justifyContent={'center'}>
          <Box display={'flex'} width={'80%'} gap={'20px'} marginTop={'-50px'}>
            {images.map((image, index) => {
              return (
                <ImageListItem
                  key={image.text}
                  sx={{
                    transform: index === 1 ? 'translateY(-50px)' : '',
                  }}>
                  <img
                    src={image.src}
                    style={{ aspectRatio: '1/1.21', borderRadius: '12px' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      height: '100%',
                      width: '100%',
                      top: 0,
                      backgroundColor: '#00000030',
                    }}>
                    <IconButton
                      sx={{
                        top: '50%',
                        left: '50%',
                        backgroundColor: 'rgba(0, 0, 0, 1)',
                        p: '2.5rem',
                        transform: 'translate(-50%, -50%)',
                      }}
                      aria-label={''}>
                      <ArrowForwardIcon
                        sx={{ width: '3rem', height: '3rem', color: '#FFF' }}
                      />
                    </IconButton>
                    <p
                      style={{
                        color: '#FFF',
                        textAlign: 'center',
                        fontFamily: 'Helvetica Neue',
                        fontSize: '29px',
                        lineHeight: '26px',
                        position: 'absolute',
                        margin: 0,
                        width: '100%',
                        bottom: '50px',
                      }}>
                      {image.text}
                    </p>
                  </Box>
                </ImageListItem>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Box display={'flex'}>
        <Typography
          variant='body1'
          width={'400px'}
          sx={{ textTransform: 'uppercase' }}>
          Our properties feature the latest technology, innovative design, and
          eco-friendly features. Experience the home of tomorrow, today.
        </Typography>
      </Box>
    </Container>
  );
};

export default HomeDesigns;
