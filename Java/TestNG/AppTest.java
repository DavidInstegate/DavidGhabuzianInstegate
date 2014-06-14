package com.mycompany.app;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import org.testng.annotations.Test;

import java.util.Random;

public class AppTest 
{
    @Test
    public void testApp()
    {
        Random mockRandom = mock(Random.class);
        when(mockRandom.nextInt()).thenReturn(42);
        assertThat(mockRandom.nextInt(), equalTo(42));
    }
}
