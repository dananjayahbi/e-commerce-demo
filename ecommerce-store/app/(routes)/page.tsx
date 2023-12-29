import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container"

export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getBillboard("69334af2-785a-4dd7-90f1-f30c76edcf00");

    return ( 
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
            </div>
        </Container>
     );
}
 
export default HomePage;