import { Alert, AlertIcon, Container } from '@chakra-ui/react'
function Conform() {

    return (
        <Container maxW='container.md'>
            <div style={{ width: "100%", height: '40vh' }}>
                <div style={{ margin: '40px' }}>
                    <div style={{ margin: "10px", display: "grid", placeItems: "center" }} >
                        <Alert status='success'>
                            <AlertIcon />
                            The table has been reserved successfully.
                        </Alert>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Conform;