import org.junit.*;
import static org.junit.Assert.*;
import java.util.*;

public class JunitTest1 {

    private Collection collection;

    @BeforeClass
        public static void oneTimeSetUp() {
            // one-time initialization code   
            System.out.println("@BeforeClass - oneTimeSetUp");
        }

    @AfterClass
        public static void oneTimeTearDown() {
            // one-time cleanup code
            System.out.println("@AfterClass - oneTimeTearDown");
        }

    @Before
        public void setUp() {
            collection = new ArrayList();
            System.out.println("@Before - setUp");
        }

    @After
        public void tearDown() {
            collection.clear();
            System.out.println("@After - tearDown");
        }

    @Test
        public void testEquals() {
            assertEquals(1, 1);
            System.out.println("@Test - 1 == 1");
        }
    public static void main(String [] argv) {
        JunitTest1 test = new JunitTest1();
        test.testEquals();
    }
}
